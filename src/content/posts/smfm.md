---
title: "有限相似数据集会加重AI味"
published: 2026-07-28
description: ""
image: "/images/blog/sample.png"
tags: ["扩散模型"]
category: "研究"
draft: false
---

AI味道的图见的太多了，其实人的肉眼分辨细节是非常非常灵敏的，相对于生成模型来说，人类同时具备对于高频和低频的全频段感知，因此AI生成的图像在边缘细节还是经不起推敲。
大部分ACG的AI生成模型，大多数来源都是【未经许可】的画风训练，因此，在大量民用级训练资源，以及盗版图源下，质量相对于正常授权源文件获得的质量要差得多。
同时，我们可能会发现，错误的扩散模型采样方法，或者一些错误的CFG参数设置，会加剧这种AI噪声的问题。但是如果我们考虑一个理想连续模型，但是在一个理想有限的大量相似数据集下，这种AI味道就能被避免吗？

## 理想连续的 V-pred diffusion 的前向过程

我们给出V-pred diffusion的标准形式

$$
dx_t=-\frac12\beta(t)x_tdt+\sqrt{\beta(t)}dW_t
$$

其中，W是标准维纳过程，闭式解形式为

$$
x_t=\alpha_t x_0+\sigma_t\epsilon,
\qquad
\epsilon\sim\mathcal N(0,I)
$$

其中通常有

$$
\alpha_t^2+\sigma_t^2=1
$$

对图像进行傅里叶变换。记第k个频率模态为

$$
\widehat x_t(k)=

\alpha_t\widehat x_0(k)+\sigma_t\widehat\epsilon(k)
$$

白噪声在每个频率上的期望功率近似相同：

$$
\mathbb E|\widehat\epsilon(k)|^2=C
$$

因此第k个频率的信噪比是

$$
\operatorname{SNR}_k(t)=

\frac{
\alpha_t^2 P_0(k)
}{
\sigma_t^2 C
}
$$

其中

$$
P_0(k)=\mathbb E|\widehat x_0(k)|^2
$$

是数据的功率谱。

自然图像、光滑曲面和一般物理信号通常具有随频率下降的功率谱，可粗略写成幂律分布

$$
P_0(k)\propto |k|^{-\gamma}
\qquad \gamma>0
$$


所以

$$
\operatorname{SNR}_k(t)
\propto
\frac{\alpha_t^2}{\sigma_t^2}
|k|^{-\gamma}
$$

频率越高，SNR 越低。

我们以 $\operatorname{SNR}_k(t)=1$ 作为一个方便的参考阈值。显然，当 $ \operatorname{SNR}_k(t)>1$时，该模态的信号功率超过噪声功率，可称为信号主导或相对可辨识区域；当 $\operatorname{SNR}_k(t)=1$ 时，该模态为噪声主导区域。但这并非严格的可恢复性边界，因为生成模型仍可利用跨频率相关性与数据先验推断低 SNR 模态。

对固定时刻 (t)，可以定义一个临界频率 $k_c(t)$：
$$
\operatorname{SNR}_{k_c}(t)=1
$$



在该临界频率之上

于是

$$
|k_c(t)|
\propto
\left(
\frac{\alpha_t^2}{\sigma_t^2}
\right)^{1/\gamma}
$$

随着噪声增加，$\alpha_t/\sigma_t$ 下降，$k_c(t)$ 向低频移动。也就是说，高频信息比低频信息更早淹没在噪声中

---

## 混合相似数据集的扩散逆问题

在实际使用的数据集中，经常能遇到不同数据共享相似的频谱统计、局部纹理和跨频率相位结构，这使得我们无法进行独立假设傅里叶模态。

假设我们把所有频率系数组成向量：

$$
z=
\begin{bmatrix}
\widehat x(k_1),
\widehat x(k_2),
\dots\,
\widehat x(k_d),
\end{bmatrix}
$$

然后假设数据已经全部中心化：

$$
z\sim\mathcal N(0,\Sigma)
$$

这里 $\Sigma$ 的形式为：

$$
\Sigma_{ij}=
\operatorname{Cov}
\left(
\widehat x(k_i)\widehat x(k_j)
\right)
$$

前向扩散为

$$
z_t=\alpha_t z_0+\sigma_t\epsilon,
\qquad
\epsilon\sim\mathcal N(0,I)
$$

于是

$$
z_t\sim
\mathcal N
\left(
0,
\alpha_t^2\Sigma+\sigma_t^2I
\right)
$$

精确 score 为

$$
s^\star(z_t,t)=

\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}z_t
$$

这时 score 的第 $i$ 个分量不再只取决于 $z_i$，而取决于所有频率：

$$
s_i^\star=

-\sum_j
\left[
\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}
\right]_{ij}
z_j
$$

也就是说：

> 模型可以根据仍然清晰的低频或中频结构，推断已经低 SNR 的高频成分。

V-pred 的概率流 ODE 为


$$
\frac{dx_t}{dt}=

-\frac12\beta(t)x_t
-\frac12\beta(t)\nabla_x\log p_t(x_t)
$$

即

$$
\dot x_t=

-\frac{\beta(t)}2
\left[
x_t+\nabla_x\log p_t(x)
\right]
$$

将精确的 score 代回概率流 ODE，可得到：

$$

\dot z_t=

\frac{\beta(t)}2
\left[
\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}
-I
\right]z_t
$$

**当然，实际 $\nabla_x\log p_t(x)$ 的ground truth是没有的，因此这里是为了推导而做的假设。**

---

如果 $\Sigma$ 是对角矩阵，那么

$$
\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}
$$

也是对角矩阵，各频率独立演化。

但只要带来跨频率依赖，

$$
\Sigma_{kk'}\neq0,
\qquad k\neq k'
$$

则一般有

$$
\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}_{kk'}\neq0
$$

第 $k$ 个频率的 ODE 为

$$
\dot z_k=

\frac{\beta}2
\left[
\sum_{k'}
\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}_{kk'}z_{k'}
-z_k
\right]
$$

我们将表示空间分块：

$
z=[l,h]
$

其中 l 是低频或大尺度结构，h 是高频、边缘和纹理。

定义： 
$$
C_t=\left(
\alpha_t^2\Sigma+\sigma_t^2I
\right)^{-1}
$$

其在分块形式下又可以写成：

$$
C_t=\begin{bmatrix}
C_ll(t) & C_lh(t) \\
C_hl(t) & C_hh(t)
\end{bmatrix}
$$

高斯分布下，高频在给定低频后的条件分布是

$$
h_t\mid l_t
\sim
\mathcal N
\left(
m_{h\mid l}(t),
C_{h\mid l}(t)
\right)
$$

其中

$$
m_{h\mid l}(t)=C_{hl}(t)C_{ll}(t)^{-1}l_t
$$
以及

$$
C_{h\mid l}(t)=C_{hh}(t)

C_{hl}(t)C_{ll}(t)^{-1}C_{lh}(t)
$$

高频方向的条件 score 可写成

$$
s_h^*=


C_{h\mid l}^{-1}
\left[
h_t-m_{h\mid l}(t)
\right]
$$

代入 ODE 的高频部分：

$$
\dot h_t=
-\frac{\beta}2h_t
+
\frac{\beta}2
C_{h\mid l}^{-1}
\left[
h_t-m_{h\mid l}(t)
\right]
$$

即
$$

\dot h_t=
\frac{\beta}2
\left(
C_{h\mid l}^{-1}-I
\right)h_t
\frac{\beta}2
C_{h\mid l}^{-1}m_{h\mid l}(t)

$$

从反向生成角度看，动力系统会把 $h_t$ 拉向条件均值$m_{h\mid l}(t)$，也就是说，高频会被拉向：$C_{hl}C_{ll}^{-1}l_t$，这意味着，即便高频本身的边际 SNR 很低，它仍可能受到低频、中频和其他结构变量的驱动。因此相似的结构允许互相被吸收以重新映射回高频。

---

统一的风格数据意味着，在给定结构 l 后，高频 h 的变化范围较小：

$$
C_{h\mid l}\ll C_{hh}
$$

在这样训练集下，此时$C_{h\mid l}^{-1}$会变大。

### 低噪声末端更加刚性

因为$\lambda_{\min}(C_{h\mid l})$很小，所以$
\lambda_{\max}(C_{h\mid l}^{-1})=
\frac{1}{\lambda_{\min}(C_{h\mid l})}
$很大。

对应 ODE 的 Jacobian 为

$$
J_h(t)
=
\frac{\beta(t)}2
\left(
C_{h\mid l}^{-1}-I
\right).
$$

其最大特征值可能很大：

$$
|J_h(t)|
\approx
\frac{\beta(t)}
{2\lambda_{\min}(C_{h\mid l})}.
$$

于是在理想连续无限数据的情况下，仍然会出现这种边缘末端刚性的噪声。

# 边缘伪影与模态竞争

真实的训练数据集由于多样性的构图，多样性的纹理设计，更可能是高斯混合分布，而非单纯的高斯分布

因此，我们可以有：

$$
p_0(z)=

\sum_{c=1}^C
\pi_c
\mathcal N(\mu_c,\Sigma_c),
$$

其中不同 $c$ 可以代表不同构图或局部纹理状态。

扩散后可得

$$
p_t(z)=

\sum_c
\pi_c
\mathcal N
\left(
\alpha_t\mu_c,,
C_{c,t}
\right),
$$

其中

$$
C_{c,t}=

\alpha_t^2\Sigma_c+\sigma_t^2I.
$$

score 为

$$
s_t(z)=

-\sum_c
r_c(z,t)
C_{c,t}^{-1}
(z-\alpha_t\mu_c),
$$

其中

$$
r_c(z,t)=

p(c\mid z_t)
$$

是后验责任度。

代回 ODE：

$$

\dot z_t=
-\frac{\beta}2z_t
+
\frac{\beta}2
\sum_c
r_c(z_t,t)
C_{c,t}^{-1}
(z_t-\alpha_t\mu_c)
$$

这时 ODE 不再是线性的，因为

$$
r_c=r_c(z_t,t)
$$

依赖当前状态。

当两个模式在局部区域都具有相近责任度时，score 向量场是两个吸引方向的加权平均。随着噪声降低，责任度会变得更尖锐。这容易导致边缘的过度非常不平滑，或者出现陡变。

![](/images/blog/sample2.png)

> 错误的责任度竞争结果

如果所有训练集的图的大轮廓都差不多，那么模型会非常自信地先画出差不多的整体，却不那么自信地决定某个局部高频，因此这类问题将会是目前普遍存在而且长期存在的。