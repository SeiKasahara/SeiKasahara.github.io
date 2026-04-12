---
title: "同人市场分析(10)——同人市场稳态的不可能三角"
published: 2026-04-13
description: ""
image: "/images/posts/comiket.jpg"
tags: ["同人市场"]
category: "研究"
draft: false
---

前九篇的论述共同构建了同人市场的三个重要模型，消费者的需求模型、生产者的异质性创作组合、礼物层的有限混合与可生存性分析，这些子模型各自在理论上上预设了其他模型的合理输出。消费者的偏好权重 $\alpha_i(t)$ 取决于生产者的声誉 $\theta_i$；生产者的利润 $\pi_i$ 取决于消费者的需求；无料礼物层的群体权重 $\omega_k$ 是生产者截面分布的投影。

但，由于当前不能满足瓦尔拉斯一般均衡的前提定义，我们需要使用其他的方法来研究总体的市场配置是否能达到最优，因此接下来我们要把子模型嵌入一个统一的稳态均衡框架，使得：

1. 消费者在均衡价格下最优配置，生产者在均衡价格和截面分布下按混合过程决策，两侧的行为同时自洽；
2. 截面分布在进入-退出流下不变（稳态条件）；
3. 无料形式化工作的的微分包含与可生存性核（无料机制安全界） $K_{\text{ext}}$ 作为均衡的真子集自然包含。

而最后，我们将从命题里得出一个同人市场稳态的不可能三角：市场繁荣、无料繁荣、新人可进入性三者不可同时达到最优，以及寻求均衡的退化形式来解释小的同人社群。

## 警告

本章是形式化工作，阅读之前可能需要掌握一部分前置数学理论。

## 一、基本设定

### 1.1 个体状态空间

每个活跃的创作者 $i$ 在 $t$ 时刻的状态为

$$
s_i(t) \;=\; \bigl(\theta_i(t),\; W_i(t),\; T_i(t),\; n_i(t),\; \mathbf{q}_i\bigr) \;\in\; \mathcal{S}
$$

其中 $\theta_i \in [0, \bar{\theta}]$ 为声誉（有上界，由塌方和信息披露的内生减速保证），$W_i \in (0, \bar{W}]$ 为热情预算（有上界，由精力消耗的增长保证），$T_i \in [0, \bar{T}]$ 为时间禀赋（外生、有界），$n_i \in [0, \bar{n}]$ 为网络位置

创作者 $i$ 在无料网络中的可视范围大小 $|N_i^{\text{circle}}|$，$\mathbf{q}_i \in \Delta^4$ 为混合向量（来自[生产者模型](https://seikasahara.com/zh/posts/pfyh/)的四个类型）。

状态空间 $\mathcal{S} = [0, \bar{\theta}] \times (0, \bar{W}] \times [0, \bar{T}] \times [0, \bar{n}] \times \Delta^4$ 是 $\mathbb{R}^8$ 中的紧子集。

### 1.2 截面分布

**定义 1.1（截面分布）**。产业状态是所有活跃创作者的状态联合分布：

$$
\mu_t \;\in\; \mathcal{P}(\mathcal{S})
$$

其中 $\mathcal{P}(\mathcal{S})$ 是 $\mathcal{S}$ 上的 Borel 概率测度空间，赋以弱收敛拓扑。$\mu_t$ 主要描述 $t$ 时刻市场上有哪些声誉水平、哪些热情状态、哪些类型构成的创作者在活动。

### 1.3 聚合量与投影

从 $\mu$ 可以计算出若干商品聚合量，它们作为消费者和无料层的输入：

**市场层聚合量**：

$$
S_H(\mu) \;=\; \int_{\mathcal{S}} \bar{x}_{i,a_{H,M}}(s) \, d\mu(s), \qquad S_L(\mu) \;=\; \int_{\mathcal{S}} \bar{x}_{i,a_{L,M}}(s) \, d\mu(s)
$$

其中 $\bar{x}_{i,a_j}(s)$ 是状态为 $s$ 的创作者在混合过程下对资产 $a_j$ 的期望配置$S_H, S_L$ 分别是同人本A类作品和同人谷B类作品的市场层总供给。

**无料层**：

$$
g(\mu) \;=\; \int_{\mathcal{S}} \bigl(\bar{x}_{i,a_{H,G}}(s) + \bar{x}_{i,a_{L,G}}(s)\bigr) \, d\mu(s)
$$

$$
\omega_k(\mu) \;=\; \int_{\mathcal{S}} q_{i,k} \, d\mu(s), \qquad k \in \{A, B, D, E\}
$$

$(g, \omega)$ 是 $\mu$ 在无料状态空间 $[0,1] \times \Delta^4$ 上的投影。这一投影是多对一的，很多不同的 $\mu$ 可以产生同一个 $(g, \omega)$，因为人可以对应很多种行动。

**声誉分布**：

$$
\Theta(\mu) \;=\; \mu \circ \theta_i^{-1}
$$

即声誉的边际分布。消费者在传播网络中面对的市场上有哪些创作者可选由 $\Theta(\mu)$ 决定。因为消费者无法看到全局的创作者，只能依照观察到的声誉进行优先排序。

### 1.4 网络拓扑参数

同人市场有两个拓扑上截然不同的网络同时运作。**无料网络**（高聚类的小世界，由 Jackson & Rogers 2007 的朋友圈搜索生成）和**市场网络**（低聚类的辐射网，由 Barabási-Albert 优先连接生成）。两个网络通过不同的通道进入均衡。

**定义 1.2（网络参数向量）**。两个网络由一个联合外生参数向量刻画：

$$
\mathbf{n} \;=\; (s,\; m_{\ell},\; p_r,\; \alpha_{\text{net}}) \;\in\; \mathcal{N}
$$

前三个参数描述无料网络：$s$ 是随机遇见概率，$m_\ell$ 是每期每个新进入者形成的链接数，$p_r$ 是互惠回路概率。第四个参数 $\alpha_{\text{net}} > 1$ 描述市场网络：它是市场网络度分布的帕累托指数，度分布 $P(k \geq x) \sim x^{-(\alpha_{\text{net}}-1)}$。$\alpha_{\text{net}}$ 越小，市场网络越集中于少数高连接度的大V；$\alpha_{\text{net}}$ 越大，市场网络趋向均匀。

$\mathbf{n}$ 通过以下五条通道进入均衡（N1-N4 来自无料网络，N5 来自市场网络）：

**(N1) 可视范围分布**。个体状态中的 $n_i = |N_i^{\text{circle}}|$ 的截面分布由 $\mathbf{n}$ 确定。Jackson-Rogers 模型的稳态度分布为

$$
P(n_i \geq x) \;\sim\; x^{-\gamma_{\text{net}}(s)}
$$

$s$ 越小，幂律指数 $\gamma_{\text{net}}$ 越小、尾部越重，可以理解为少数无料枢纽拥有极大覆盖。$s$ 越大，度分布趋向泊松分布，覆盖范围趋于均匀。

**(N2) 声誉传播的局部性**。礼物网络的聚类系数 $C(\mathcal{G}) = f(s, p_r)$ 决定了声誉信号在消费者群体中的传播结构。$C$ 高意味着信息在小圈子内快速传播但跨圈子慢，因此声誉的有效覆盖受制于网络的局部连通性。这一效应在将在下面的偏好动态中被显式建模。

**(N3) 协作概率的调制**。生产者理论的协作约束 $p_{\text{collab}}(\theta_i, q_{i,B})$ 被随机遇见概率 $s$ 调制：随机遇见概率$s$ 小时圈内协作容易但跨圈协作难，随机遇见概率$s$ 大时协作机会更分散但平均概率更低。形式地：

$$
p_{\text{collab}}(\theta_i, q_{i,B};\, \mathbf{n}) \;=\; h(\theta_i, q_{i,B}) \cdot \psi(s)
$$

其中 $\psi(s)$ 是网络的协作连通性函数（随机遇见概率$s$ 的非单调函数——极端的 $s=0$ 和 $s=1$ 都不利于协作，中间值最优）。

**(N4) 枢纽的脆弱性**。重尾度分布使得无料商品的聚合 $g(\mu)$ 对高度数节点高度（大V）敏感。定义枢纽集中度为

$$
\text{Hub}(\mu, \mathbf{n}) \;=\; \frac{\int_{n_i > n_{99}} \bar{x}_{a_G}(s) \, d\mu(s)}{g(\mu)}
$$

即 top 1% 度数节点对礼物层总产出的贡献份额。$\text{Hub}$ 越高，单个枢纽退出对无料商品的聚合 $g(\mu)$ 的冲击越大，市场整体的均衡对圈子老人退出越脆弱。

**(N5) 搜索成本与声誉权重的调制**。市场网络上的消费者搜索行为服从 Stigler (1961) 的最优搜寻模型。当市场网络的帕累托指数 $\alpha_{\text{net}}$ 较低时，质量分布的方差大，消费者面临的搜寻成本 $c_j$ 高，贝叶斯更新中声誉的权重上升。极端情形 $\alpha_{\text{net}} < 2$ 时方差发散，搜寻成本趋于无穷，所有消费者退化为纯声誉依赖（§3.2 详述）。

**约定 1.2**。$\mathbf{n}$ 作为均衡的外生参数处理，也就是网络结构不被某个创作者的进入退出内生改变。

## 二、生产者递归决策

### 2.1 混合 Bellman 方程

在均衡价格 $(p_H, p_L)$ 和截面分布 $\mu$ 给定下，创作者的递归问题如下。

**定义 2.1（混合值函数）**。对混合向量 $\mathbf{q}$ 和价格 $(p_H, p_L)$，创作者的值函数定义为

$$
V(\theta, W, T;\, \mathbf{q},\, p) \;=\; \sum_{k \in \{A,B,D,E\}} q_k \left[\max_{\mathbf{x} \in X(\theta,W,T)} \Bigl(\langle u_k, \boldsymbol{\rho}(\mathbf{x}; p) \rangle - E(\mathbf{x}) + \beta\, \mathbb{E}\bigl[V(\theta', W', T';\, \mathbf{q},\, p)\bigr]\Bigr)\right]
$$

其中状态转移为：

$$
\theta' \;=\; \bigl[\theta + \gamma_j \cdot I \cdot q^D(\mathbf{x}; p)\bigr] \cdot \xi^{\text{shock}}, \qquad W' \;=\; W + u_k(s, \mathbf{x}_k^*) - E(\mathbf{x}_k^*)
$$

时间禀赋 $T'$ 按外生过程演化。期望作用在 $\xi^{\text{shock}}$（塌方）和 $T'$（时间禀赋冲击）的联合分布上。

$\mathbf{q}$ 进入值函数的方式是对各类型连续值的概率加权，不是对效用的加权聚合。

**命题 2.1（值函数的存在唯一性）**。在以下条件下，$V$ 存在且唯一：

(i) 状态空间 $\mathcal{S}$ 紧；(ii) 回报函数 $\langle u_k, \boldsymbol{\rho} \rangle - E$ 对 $(\theta, W, T, \mathbf{x})$ 连续且有界；(iii) 转移概率对状态弱连续；(iv) $\beta \in (0, 1)$。

证明的lean代码如下：

```lean
import Mathlib.Topology.MetricSpace.Contracting
import Mathlib.Topology.MetricSpace.Basic
import Mathlib.Analysis.SpecificLimits.Basic
import Mathlib.Analysis.Convex.Basic

open Metric
theorem bellman_fixed_point_exists
    {F : Type*} [MetricSpace F] [CompleteSpace F] [Nonempty F]
    (T : F → F)
    (β : NNReal)
    (_hβ : β < 1)
    (hT : ContractingWith β T) :
    ∃! v : F, T v = v :=
  ⟨hT.fixedPoint, hT.fixedPoint_isFixedPt,
   fun _ hv => hT.fixedPoint_unique hv⟩
```

### 2.2 策略函数与混合涌现

**定义 2.2（类型纯策略）**。给定 $V$，机制 $k$ 的纯策略为

$$
\mathbf{x}_k^*(s;\, p) \;=\; \arg\max_{\mathbf{x} \in X(s)} \Bigl[\langle u_k, \boldsymbol{\rho}(\mathbf{x}; p) \rangle - E(\mathbf{x}) + \beta\, \mathbb{E}[V(\theta', W', T';\, \mathbf{q}, p)]\Bigr]
$$

由 Berge 极大值定理，$\mathbf{x}_k^*$ 在 $s$ 上是上半连续的对应（在标准正则条件下为连续函数）。

观察到的创作组合为混合涌现 $\bar{\mathbf{x}}(s; p) = \sum_k q_k \, \mathbf{x}_k^*(s; p)$。

### 2.3 进入与退出

**退出**。创作者在 $W_i(t) \leq 0$（内生退出）或以概率 $p_{\text{exit}}^{\text{exo}}(T_i, \mathbf{q}_i)$（外生退出）时离开市场。

**进入**。每期有外生的创作者进入流 $\nu_{\text{entry}} \in \mathcal{P}(\mathcal{S})$——新人的初始状态分布。进入率 $\lambda_{\text{entry}} > 0$ 为外生参数。

**转移核**。给定价格 $p$ 和策略 $\{\mathbf{x}_k^*\}$，从 $\mu$ 到 $\mu'$ 的转移 $\mathcal{T}_\mu$ 由三步组成，精确定义请参照附录1：

- (i) 存活的创作者按 $(\theta', W', T')$ 转移状态；
- (ii) 退出者被移除；
- (iii) 新进入者按 $\nu_{\text{entry}}$ 加入。

## 三、消费者需求与偏好动态

### 3.1 同人消费需求

消费者按如下效用函数配置预算。给定价格 $(p_H, p_L)$ 和收入 $m$，最优需求为

$$
Q_H^*(p_H, p_L, m) \;=\; \gamma_H + \frac{\beta_H^{\sigma_T} p_H^{-\sigma_T}}{\beta_H^{\sigma_T} p_H^{1-\sigma_T} + \beta_L^{\sigma_T} p_L^{1-\sigma_T}} \cdot m^s
$$

$$
Q_L^*(p_H, p_L, m) \;=\; \gamma_L + \frac{\beta_L^{\sigma_T} p_L^{-\sigma_T}}{\beta_H^{\sigma_T} p_H^{1-\sigma_T} + \beta_L^{\sigma_T} p_L^{1-\sigma_T}} \cdot m^s
$$

其中 $m^s = m - p_H \gamma_H - p_L \gamma_L$ 是超量收入。$\gamma_H, \gamma_L > 0$ 是承诺消费量。

**性质**。$Q_H^*$ 和 $Q_L^*$ 对 $(p_H, p_L)$ 连续可微（在 $m^s > 0$ 的内部）。承诺消费 $\gamma_H > 0$ 保证了 $Q_H^* \geq \gamma_H > 0$，即同人本有承诺消费的底线。

### 3.2 偏好动态与声誉反馈的网络调制

消费者对创作者 $i$ 的偏好 $\alpha_i(t)$ 按习惯积累方程更新，但声誉信号的传播受礼物网络拓扑的调制。消费者 $j$ 对创作者 $i$ 的偏好更新为

$$
\alpha_{i,j}(t) \;=\; \lambda \, \alpha_{i,j}(t-1) \;+\; (1-\lambda) \cdot \pi_{ij}(\mathbf{n}) \cdot f\bigl(\theta_i(t)\bigr)
$$

其中 $\pi_{ij}(\mathbf{n}) \in [0, 1]$ 是**网络可达性**——消费者 $j$ 观察到创作者 $i$ 的声誉信号的概率。$\pi_{ij}$ 由网络参数 $\mathbf{n}$ 决定：

- 若 $j \in N_i^{\text{circle}}$（$j$ 在 $i$ 的可视范围内），$\pi_{ij} = 1$；
- 若 $j$ 与 $i$ 之间的网络距离为 $d$，$\pi_{ij}$ 随 $d$ 单调递减；
- 聚类系数 $C(\mathcal{G})$ 高时，$i$ 的信号在密集子图内 $\pi_{ij} \approx 1$ 但跨子图 $\pi_{ij} \approx 0$。

聚合到群体层面，创作者 $i$ 的**有效需求基数**不是全体消费者 $M$，而是

$$
M_i^{\text{eff}}(\mathbf{n}) \;=\; \sum_j \pi_{ij}(\mathbf{n}) \;\leq\; M
$$

在稳态下，群体平均的偏好收敛到

$$
\bar{\alpha}_i^* \;=\; \frac{M_i^{\text{eff}}}{M} \cdot f(\theta_i^*)
$$

网络拓扑因此在声誉和需求之间引入了一个衰减因子 $M_i^{\text{eff}} / M$：位于密集子图中心的创作者（高 $n_i$）有 $M_i^{\text{eff}} / M$ 接近 1；位于网络边缘的创作者有 $M_i^{\text{eff}} / M \ll 1$。即使声誉 $\theta_i$ 相同，后者面临的有效需求也显著更低。

### 3.3 声誉权重的贝叶斯结构

偏好方程中的 $f(\theta_i)$ 不是一个任意的映射——它内含一个贝叶斯更新结构。消费者 $j$ 面对创作者 $i$ 时，对制品质量的后验预期为

$$
Q_{\text{expected}} \;=\; \alpha_j^{\text{Bayes}} \cdot \mu_0(\theta_i) \;+\; (1 - \alpha_j^{\text{Bayes}}) \cdot S_i
$$

其中 $\mu_0(\theta_i)$ 是声誉先验，$S_i$ 是当期信号（宣发、试阅等），贝叶斯权重为

$$
\alpha_j^{\text{Bayes}} \;=\; \frac{\sigma_s^2}{\sigma_0^2 + \sigma_s^2}
$$

$\sigma_0^2$ 是声誉先验的方差，$\sigma_s^2$ 是信号噪声的方差。声誉与无标度网络篇证明了 $\alpha_j^{\text{Bayes}}$ 对消费者信息财富 $W_j \propto 1/c_j$ 满足

$$
\frac{\partial \alpha_j^{\text{Bayes}}}{\partial W_j} \;<\; 0
$$

即声誉是信息意义上的**劣等品**：信息财富越高的消费者越不依赖声誉先验，越依赖当期信号。$f(\theta_i)$ 因此隐含了两层消费者异质性

- 网络可达性 $\pi_{ij}(\mathbf{n})$ 决定信号*能否到达*消费者 $j$（通道 N2）；
- 贝叶斯权重 $\alpha_j^{\text{Bayes}}(W_j)$ 决定到达后消费者*以多大权重采信*声誉（通道 N5）。

市场网络的帕累托指数 $\alpha_{\text{net}}$ 通过 $\sigma_s^2$ 影响全体消费者面临的信号噪声。当 $\alpha_{\text{net}}$ 下降，表征为市场网络更集中、质量方差更大，$\sigma_s^2$ 上升，$\alpha_j^{\text{Bayes}}$ 对所有消费者上升，市场整体更依赖声誉。

**方差发散的极端情形**：当 $\alpha_{\text{net}} < 2$ 时，帕累托分布的方差发散，$\sigma_s^2 \to \infty$，则

$$
\alpha_j^{\text{Bayes}} \;\to\; 1 \quad \forall j
$$

所有消费者都退化为纯声誉依赖。当期信号 $S_i$ 完全失去信息价值。

在均衡中这意味着：$f(\theta_i)$ 退化为 $\mu_0(\theta_i)$，偏好更新不再响应任何当期行为，新人创作者无论发出多强的信号都无法突破声誉壁垒。这一退化对于比较静态下的均衡有直接影响。

## 四、声誉反馈环路

稳态均衡的核心是以下反馈环路的自洽：

$$
\mu \;\xrightarrow{\text{供给聚合}}\; (S_H, S_L) \;\xrightarrow{\text{市场出清}}\; (p_H, p_L) \;\xrightarrow{\text{利润}}\; \pi_i \;\xrightarrow{u_A}\; W_i' \;\xrightarrow{\text{退出}}\; \mu'
$$

$$
\mu \;\xrightarrow{\Theta(\mu)}\; \alpha_i^* = f(\theta_i) \;\xrightarrow{\text{子层CES}}\; \text{个体需求} \;\xrightarrow{\text{声誉积累}}\; \theta_i' \;\xrightarrow{}\; \mu'
$$

第一条通过市场价格传导利润，影响热情预算进而影响退出；

第二条通过声誉传导偏好，影响个体需求进而影响声誉积累速度。

稳态要求 $\mu' = \mu$，即，两条路径的净效应恰好使截面分布不变。

**命题 4.1（反馈环路的良定义性）**。在以下条件下，从 $\mu$ 出发的反馈环路定义了一个从 $\mathcal{P}(\mathcal{S})$ 到自身的映射 $\Phi$：

(i) $f(\cdot)$ 连续且有界；(ii) 声誉转移 $\theta \mapsto \theta'$ 对 $(\theta, p, \mathbf{x})$ 连续；(iii) 需求函数 $Q^*$ 对 $(p, m)$ 连续。

则 $\Phi: \mu \mapsto \mathcal{T}_\mu(\mu, p(\mu))$ 是从 $\mathcal{P}(\mathcal{S})$ 到自身的弱连续映射，其中 $p(\mu)$ 由下一章的市场出清确定。

证明见附录1

## 五、市场出清与价格确定

### 5.1 供给聚合

给定截面分布 $\mu$ 和价格 $p = (p_H, p_L)$，市场层总供给为

$$
S_H(\mu, p) \;=\; \int_{\mathcal{S}} \bar{x}_{a_{H,M}}(s;\, p) \, d\mu(s), \qquad S_L(\mu, p) \;=\; \int_{\mathcal{S}} \bar{x}_{a_{L,M}}(s;\, p) \, d\mu(s)
$$

$\bar{x}_{a_j}(s; p)$ 依赖价格是因为价格进入效用函数 $u_A$ 的利润 $\pi_i$ 项。也就是生产者理论中，A 型机制被抽中时，创作组合选择会响应价格。

### 5.2 出清条件

**定义 5.1（市场出清）**。给定 $\mu$，均衡价格 $p^*(\mu) = (p_H^*, p_L^*)$ 满足

$$
Q_H^*(p_H^*, p_L^*, m) \;=\; S_H(\mu, p^*), \qquad Q_L^*(p_H^*, p_L^*, m) \;=\; S_L(\mu, p^*)
$$

### 5.3 价格映射的性质

**命题 5.1（价格映射的连续性）**。在以下条件下，$p^*: \mathcal{P}(\mathcal{S}) \to \mathbb{R}_{++}^2$ 是弱连续的：

- (i) 需求函数 $Q^*$ 对 $p$ 严格递减（正常品的需求定律）；
- (ii) 供给函数 $S$ 对 $p$ 弱递增（A 型在价格更高时倾向于多供给）；
- (iii) 在边界处需求超过供给（保证内点解存在）。

承诺消费 $\gamma_H > 0$ 在这里保证了 $Q_H^* \geq \gamma_H > 0$，使得同人本市场的需求底线为正。即使供给极低，价格也不会到无穷。

## 六、稳态均衡：定义与存在性

### 6.1 定义

**定义 6.1（稳态均衡）**。给定网络参数 $\mathbf{n} \in \mathcal{N}$，一个稳态均衡是状态 $\bigl(\mu^*,\; p^*,\; V^*,\; \{\mathbf{x}_k^*\}_{k \in \{A,B,D,E\}}\bigr)$ 满足以下六个条件：

**(E1) 混合 Bellman 最优**。$V^*$ 是定义 2.1 在价格 $p^*$ 下的不动点，$\mathbf{x}_k^*$ 是对应的类型纯策略（定义 2.2）。

**(E2) 混合涌现**。每个创作者的观察 portfolio 为 $\bar{\mathbf{x}}(s) = \sum_k q_k \, \mathbf{x}_k^*(s;\, p^*)$。

**(E3) 市场出清**。$(p_H^*, p_L^*)$ 满足定义 5.1 的出清条件。

**(E4) 截面分布不变**。$\mu^*$ 在转移核 $\mathcal{T}_\mu$ 下不变：

$$
\mu^* \;=\; \mathcal{T}_\mu(\mu^*,\, p^*)
$$

即进入流、退出流和状态转移的净效应恰好维持 $\mu^*$ 不变。

**(E5) 无料层可生存性**。$\mu^*$ 的无料层投影落在可生存性核内：

$$
\bigl(g(\mu^*),\, \omega(\mu^*)\bigr) \;\in\; K_{\text{ext}} \;=\; \bigl\{(g, \omega) : \omega_B + \omega_D + \omega_E \;\geq\; \underline{\omega}_{\text{floor}}\bigr\}
$$

### 6.2 存在性

**定理 6.1（稳态均衡的存在性）**。在以下条件下，满足 (E1)-(E5) 的稳态均衡存在：

(A1) 状态空间 $\mathcal{S}$ 是紧的。

(A2) 回报函数 $\langle u_k, \boldsymbol{\rho} \rangle - E$ 对所有变量连续且有界。

(A3) 转移概率关于状态弱连续。

(A4) $\beta \in (0, 1)$。

(A5) 需求函数 $Q^*$ 对价格连续，对自价格严格递减。

(A6) 进入率 $\lambda_{\text{entry}} > 0$，进入分布 $\nu_{\text{entry}}$ 对 $K_{\text{ext}}$ 有正支撑（即新进入者的 $\mathbf{q}_i$ 分布使得 $\omega_B + \omega_D + \omega_E$ 的群体均值在可生存性核内部）。

*证明*：

**第一步：值函数存在**。已证明，由命题 2.1，对每个 $(p, \mathbf{q})$，$V^*(\cdot; \mathbf{q}, p)$ 存在唯一。

**第二步：策略函数连续**。由 Berge 极大值定理和条件 (A1)(A2)，$\mathbf{x}_k^*(s; p)$ 关于 $(s, p)$ 上半连续。在标准正则条件下，$\mathbf{x}_k^*$ 为连续函数。

**第三步：价格映射连续**。由命题 5.1 和条件 (A5)，$p^*(\mu)$ 是 $\mu$ 的弱连续函数。

**第四步：转移核连续**。由第二步和条件 (A3)，转移核 $\mathcal{T}_\mu(\mu, p)$ 关于 $(\mu, p)$ 弱连续。

**第五步：复合映射与不动点**。定义 $\Phi: \mathcal{P}(\mathcal{S}) \to \mathcal{P}(\mathcal{S})$ 为

$$
\Phi(\mu) \;=\; \mathcal{T}_\mu\bigl(\mu,\, p^*(\mu)\bigr)
$$

由第三步和第四步，可得$\Phi$ 弱连续。$\mathcal{P}(\mathcal{S})$ 在弱拓扑下是紧凸的。由 **Schauder 不动点定理**，$\Phi$ 有不动点 $\mu^* = \Phi(\mu^*)$。这一 $\mu^*$ 满足 (E1)-(E4)。

**第六步：可生存性筛选**。第五步给出的不动点 $\mu^*$ 不一定落在 $K_{\text{ext}}$ 内。把不动点问题限制在

$$
\mathcal{P}_K(\mathcal{S}) \;=\; \bigl\{\mu \in \mathcal{P}(\mathcal{S}) : (g(\mu), \omega(\mu)) \in K_{\text{ext}}\bigr\}
$$

上。$\mathcal{P}_K$ 是 $\mathcal{P}(\mathcal{S})$ 的闭子集（因为 $g$ 和 $\omega$ 是 $\mu$ 的连续泛函，$K_{\text{ext}}$ 是闭集）。若 $\Phi$ 把 $\mathcal{P}_K$ 映入自身，即 $K_{\text{ext}}$ 在 $\Phi$ 下不变，则 Schauder 定理在 $\mathcal{P}_K$ 上给出满足 (E5) 的不动点。

$K_{\text{ext}}$ 在 $\Phi$ 下不变的充分条件是条件 (A6)：进入流持续注入足够的 B/D/E 型创作者，使得即使 A 型因塌方或信号污染退出，$\omega_B + \omega_D + \omega_E$ 的群体均值也不跌破社群支撑下界 $\underline{\omega}_{\text{floor}}$。

**注 6.1（唯一性）**。定理 6.1 不保证唯一性。声誉反馈环路可能产生多重稳态。一个"高声誉-高需求-高利润-高存活"的好均衡和一个"低声誉-低需求-低利润-高退出"的坏均衡可能同时存在。多重均衡在 Hopenhayn 框架的扩展中是常见的（Ericson & Pakes 1995）。无料的形式化工作里，的可生存性核 $K_{\text{ext}}$ 排除了一部分无料层上的不良均衡，但不保证在 $K_{\text{ext}}$ 内部只有一个均衡。

6.1证明的Lean代码如下：

```Lean
axiom schauder_fixed_point
    {X : Type*} [TopologicalSpace X] [AddCommMonoid X] [Module ℝ X]
    (K : Set X)
    (hK_compact : IsCompact K)
    (hK_convex : Convex ℝ K)
    (hK_nonempty : K.Nonempty)
    (Φ : X → X)
    (hΦ_cont : Continuous Φ)
    (hΦ_maps : ∀ x ∈ K, Φ x ∈ K) :
    ∃ x ∈ K, Φ x = x

structure EquilibriumData (P : Type*) [TopologicalSpace P] [AddCommMonoid P] [Module ℝ P] where
  admissible : Set P
  Φ : P → P
  admissible_compact : IsCompact admissible
  admissible_convex : Convex ℝ admissible
  admissible_nonempty : admissible.Nonempty
  Φ_continuous : Continuous Φ
  Φ_maps_admissible : ∀ μ ∈ admissible, Φ μ ∈ admissible

theorem steady_state_equilibrium_exists
    {P : Type*} [TopologicalSpace P] [AddCommMonoid P] [Module ℝ P]
    (E : EquilibriumData P) :
    ∃ μ ∈ E.admissible, E.Φ μ = μ :=
  schauder_fixed_point
    E.admissible E.admissible_compact E.admissible_convex
    E.admissible_nonempty E.Φ E.Φ_continuous E.Φ_maps_admissible
```

## 七、无料层投影与可生存性约束

### 7.1 投影算子

**定义 7.1（无料层投影）**。定义投影算子 $\Pi: \mathcal{P}(\mathcal{S}) \to [0,1] \times \Delta^4$ 为

$$
\Pi(\mu) \;=\; \bigl(g(\mu),\, \omega(\mu)\bigr)
$$

其中 $g(\mu)$ 和 $\omega(\mu)$ 在之前已经定义。$\Pi$ 是多对一的：很多不同的 $\mu$ 可以产生同一个 $(g, \omega)$。

### 7.2 兼容性条件

无料的形式化工作在 $(g, \omega)$ 空间上定义了微分包含

$$
\dot{x}(t) \;\in\; F\bigl(x(t)\bigr), \qquad x = (g, \omega)
$$

其中 $F$ 有两个分量：

$$
\dot{g} \;\in\; [\underline{\lambda}, \overline{\lambda}] \cdot \bigl(g^*(\omega) - g\bigr), \qquad |\dot{\omega}_k| \;\leq\; \mu_k \quad \forall k
$$

**定义 7.2（投影兼容性，条件 E6）**。均衡满足投影兼容性，当且仅当对 $\mu^*$ 的任意邻域扰动 $\mu^* + \varepsilon \, \delta\mu$，诱导的 $(g, \omega)$ 变化率落在 $F$ 内：

$$
\frac{d}{d\varepsilon}\bigg|_{\varepsilon=0} \Pi\bigl(\Phi(\mu^* + \varepsilon \, \delta\mu)\bigr) \;\in\; F\bigl(\Pi(\mu^*)\bigr)
$$

对所有满足 $\mu^* + \varepsilon \, \delta\mu \in \mathcal{P}(\mathcal{S})$ 的扰动方向 $\delta\mu$ 成立。

**命题 7.1（兼容性的充分条件）**。投影兼容性在以下条件下成立：

(i) 均衡的创作组合的调整速度，即 $\bar{x}_{a_G}(s; p)$ 对 $p$ 的弹性，落在 $[\underline{\lambda}, \overline{\lambda}]$ 区间内。

(ii) 进入退出流对 $\omega_k$ 的影响速率，即每期进入者和退出者的类型构成差异，有界于 $\mu_k$。

命题的证明可以在附录2找到

### 7.3 无料形式化命题的所有推导

无料层的核心命题现在可以从完整均衡中推导：

**观察 1 礼物层的结构性下界**：在稳态均衡中，$g(\mu^*) > 0$ 由 (E5) 保证，即社群支撑下界$K_{\text{ext}}$ 要求 $\omega_B + \omega_D + \omega_E \geq \underline{\omega}_{\text{floor}}$，而根据生产者理论这些类型的创作组合在无料资产 $a_G$ 上有正权重，因此 $g > 0$。

**观察 2 圈子间差异是创作者类型 $\omega$ 的分布差异**：不同圈子对应不同的 $\nu_{\text{entry}}$（进入者的 $\mathbf{q}_i$ 分布不同），导致稳态 $\mu^*$ 不同，投影到不同的 $(g^*, \omega^*)$。

**总无料发放频率下界 $\rho_{\text{free}}^{\text{floor}}$ 的微观基础**：B/D/E 主导子群体的创作组合份额对外部激励不敏感，因此 $g(\mu^*)$ 对外部激励有一个正的下界。

## 八、Oblivious 均衡

### 8.1 动机

完整稳态均衡要求每个创作者在完整截面分布 $\mu$ 下做最优决策。但在同人市场中，没有创作者真的观察到 $\mu$，因为信息限制，他们只感知到大概的行情。Weintraub, Benkard & Van Roy (2008) 的 oblivious equilibrium 把 $\mu$ 的完整信息替换为一个低维的长期平均统计量。

### 8.2 定义

**定义 8.1（Oblivious 均衡）**。定义长期平均状态为

$$
\bar{m} \;=\; \bigl(\bar{\theta},\; N_H,\; N_L,\; p_H,\; p_L\bigr) \;\in\; \mathbb{R}_+^5
$$

其中 $\bar{\theta} = \mathbb{E}_{\mu^*}[\theta_i]$，$N_H, N_L$ 分别为同人本和同人谷市场的活跃创作者数。

一个 oblivious 均衡是状态 $(\hat{\mu}, \bar{m}^*, \hat{V}, \{\hat{\mathbf{x}}_k\})$ 满足：

- **(O1) Oblivious Bellman**。$\hat{V}(\theta, W, T; \mathbf{q}, \bar{m}^*)$ 求解定义 2.1 的 Bellman，但将截面分布的影响压缩到 $\bar{m}^*$ 中——价格直接取 $\bar{m}^*$ 的 $(p_H, p_L)$ 分量。
- **(O2) 长期平均一致**。$\bar{m}^*$ 等于 $\hat{\mu}$ 下的长期平均：$\bar{m}^* = \mathbb{E}_{\hat{\mu}}[(\theta, \mathbb{1}_{H}, \mathbb{1}_{L}, p_H, p_L)]$。
- **(O3) 稳态与可生存性**。$\hat{\mu}$ 是不变分布且 $\Pi(\hat{\mu}) \in K_{\text{ext}}$。

### 8.3 与完整均衡的近似关系

**命题 8.1（Oblivious 近似）**。当活跃创作者数 $N \to \infty$ 时，oblivious 均衡 $(\hat{\mu}, \bar{m}^*)$ 趋近完整稳态均衡 $(\mu^*, p^*)$。具体地：

$$
\sup_s \bigl|V^*(s;\, \mu^*) - \hat{V}(s;\, \bar{m}^*)\bigr| \;\to\; 0 \quad \text{as } N \to \infty
$$

这是 Weintraub-Benkard-Van Roy (2008) 定理 1 的直接推论。

当 $N$ 大时，$\mu$ 的随机波动对任何单个创作者的影响为 $O(1/N)$，因此忽略截面分布的精确形态只引入 $O(1/N)$ 的值函数误差。

同人市场通常有数百到数千个活跃创作者，$N$ 足够大使得近似有效。

Oblivious 均衡把 Banach 空间上的不动点问题（求 $\mu^*$）简化为 $\mathbb{R}^5$ 上的不动点问题（求 $\bar{m}^*$），使得数值计算成为可能。

## 九、比较静态

在稳态均衡的框架下，可以对以下外生变量做比较静态分析。

### 9.1 消费者收入冲击

**命题 9.1**。消费者收入 $m$ 的正向冲击 $\Delta m > 0$ 在稳态比较静态下：

- (i) $p_H^*$ 上升（同人本需求增加导致均衡价格上升）；
- (ii) A 型创作者的 $W_i$ 上升（效用函数$u_A$ 中利润 $\pi_i$ 增加）使得退出率下降，同人本创作人数$N_H$ 增加；
- (iii) A型创作者存活率 $\omega_A(\mu^*)$ 上升使得无料层的分布 $g(\mu^*)$ 可能下降（A 型的创作组合在无料 $a_G$ 上的份额低于 B/D/E 型）。

(iii) 表明消费者收入的增加可能降低市场上的无料供给。

### 9.2 创作者类型构成冲击

**命题 9.2**。若创作者的进入分布 $\nu_{\text{entry}}$ 中 A 型权重系统性上升，例如商业化浪潮吸引更多以声誉投资为目的的创作者进入，则：

- (i) 比例$\omega_A(\mu^*)$ 上升，用爱发电比例 $\omega_B + \omega_D + \omega_E$ 下降；
- (ii) 若下降幅度使无料层投影 $\Pi(\mu^*)$ 逼近无料可生存性核 $K_{\text{ext}}$ 的边界，声誉信号通道开始退化；
- (iii) 极端情况下无料层投影 $\Pi(\mu^*)$ 越过边界，稳态均衡不再存在于 $\mathcal{P}_K$ 内，系统进入不可持续状态。

这也就是为什么，商业化平台容易被投机吞噬

### 9.3 网络拓扑冲击

稳态均衡 $\mu^*(\mathbf{n})$ 对网络参数 $\mathbf{n} = (s, m_\ell, p_r)$ 的响应刻画最重要的几个命题。

**命题 9.3（聚类系数与市场分割）**。当 $s$ 下降（朋友圈搜索权重上升）导致聚类系数 $C(\mathcal{G})$ 上升时：

- (i) 声誉传播使得回声室效应加剧。有效需求基数 $M_i^{\text{eff}} / M$ 在圈内创作者处上升、在圈外创作者处下降。均衡中 $\Theta(\mu^*)$ 的声誉分布变得更极端，即小圈子内，圈内创作者声誉高且集中，圈外创作者声誉低且分散。
- (ii) 同人本市场从一个统一市场裂解为若干**局部子市场**，每个子市场由一个密集子图的内部需求支撑。子市场之间的价格差异可以持续存在（不被套利消除，因为信息不跨子图流动）
- (iii) 协作概率 $p_{\text{collab}}$ 在圈内上升（朋友的朋友更容易协作）但在圈外下降，使得B 型修正项的协作效应被网络锁定在子图内部，无法在小圈子之间流动。

**命题 9.4（枢纽脆弱性与可生存性边际）**。当度分布尾部更重（$\gamma_{\text{net}}$ 下降，少数枢纽更大）时：

- (i) 枢纽集中度 $\text{Hub}(\mu, \mathbf{n})$ 上升 → $g(\mu^*)$ 对单个枢纽退出更敏感；
- (ii) 若枢纽退出是随机的（如塌方事件 $\xi^{\text{shock}}$ 命中高度数节点），无料层的$g(\mu)$ 经历离散跳跃，可能将无料状态 $(g, \omega)$ 瞬时推到无料可生存核 $K_{\text{ext}}$ 边界之外；
- (iii) 这一脆弱性在定理 6.1 的存在性证明中表现为：$K_{\text{ext}}$ 的不变性（第六步）对重尾网络更难保证，进入流 $\nu_{\text{entry}}$ 必须不仅补充 B/D/E 类型权重，还必须补充网络中心性，通俗来讲，即新进入者必须有足够概率通过朋友圈搜索进入枢纽邻域。

**命题 9.5（帕累托指数与声誉锁定）**。当市场网络的帕累托指数 $\alpha_{\text{net}}$ 下降时，通过声誉的贝叶斯权重通道产生以下级联：

- (i) 帕累托指数 $\alpha_{\text{net}}$ 下降使得质量分布方差上升，导致市场整体更依赖声誉先验 $\mu_0(\theta_i)$，当期信号 $S_i$ 的信息价值下降。
- (ii) 当期信号贬值直接削弱新人创作者突破声誉壁垒的能力，后发者被迫支付增长的沉没成本。
- (iii) 由于创作者新人进入的有效性下降，进入流 $\nu_{\text{entry}}$ 在声誉维度上失效（新人进入但 $\theta_i$ 无法增长），使得截面分布 $\mu^*$ 退化为少数高声誉节点主导的集中分布。
- (iv) 集中分布意味着A型的比例 $\omega_A(\mu^*)$ 上升，因为只有 A 型从声誉锁定中获利，也在推动无料状态 $(g, \omega)$ 向无料可生存性核 $K_{\text{ext}}$ 边界移动。

这给出关于先来者优势论述在均衡框架中的严格论证，**市场网络的无标度程度（$\alpha_{\text{net}}$）是一个独立于礼物网络参数的脆弱性来源，它通过市场层的声誉锁定消除了新人进入流的有效性**。一个圈子的礼物层可能健康，但如果市场网络的帕累托指数 $\alpha_{\text{net}}$ 过低，市场层仍然退化为寡头垄断。可以感性理解为，火热且没有官方对推荐算法引导的IP对新人天然地不友好。

## 十、不可能三角的建立

同人市场的稳态均衡被一个不可能三角锁死：市场繁荣、无料繁荣、新人可进入性三者不可同时最大化。

命题 9.1(iii) 证明了，消费者支出增加提高了 A 型创作者的存活率，群体构成向商业端漂移，无料层总产出 $g(\mu^*)$反而下降；市场越热，赠品越少。
命题 9.5 证明了当市场网络的帕累托指数 $\alpha_{\text{net}}$ 跌破，创作质量分布方差发散，所有消费者退化为纯声誉依赖，当期信号完全失效，后发者面对的信号阈值通货膨胀至无穷；流量越集中，新人越不可能进入创作。
命题 7.2 证明了，当用爱发电创作者比例 $\omega_B + \omega_D + \omega_E$ 跌破可生存性下界 $\underline{\omega}_{\text{floor}}$，声誉信号通道退化触发，连社群的稳态均衡本身都不再存在

因此，同人市场的均衡只能在三角形的内部某处妥协，任何试图同时推向三个顶点的干预都被信号污染或构成效应弹回。

## 十一、退化形式

完整均衡通过网络参数 $\mathbf{n}$ 和贝叶斯声誉权重 $\alpha_j^{\text{Bayes}}$ 引入了两层信息摩擦。

当社群规模小到"所有人认识所有人且看过所有人的作品"时，这两层摩擦同时消失。本节给出严格的退化条件和退化后的均衡形态。

### 11.1 去网络化极限（D1）

**定义 11.1（去网络化参数极限）**。取 $s \to 1$（纯随机遇见，无朋友圈搜索）、$\alpha_{\text{net}} \to \infty$（市场网络度分布趋向均匀），并令初始链接数 $m_\ell$ 足够大使得礼物网络在 $N$ 个节点上近似完全图。

**命题 11.1（去网络化退化）**。在极限 D1 下：

(i) §1.4 的五条网络通道全部退化——

- (N1) $n_i \to N \;\forall i$，可视范围分布退化为单点。
- (N2) $\pi_{ij} \to 1 \;\forall (i,j)$，$M_i^{\text{eff}} \to M$。§3.2 的偏好方程退化为注 3.1 的特例：$\alpha_i(t) = \lambda\, \alpha_i(t-1) + (1-\lambda)\, f(\theta_i)$。声誉信号无衰减地到达所有消费者。
- (N3) $p_{\text{collab}}$ 不再被 $s$ 调制，协作概率只取决于 $(\theta_i, q_{i,B})$。
- (N4) $\text{Hub}(\mu, \mathbf{n}) \to 0$——度分布退化为均匀，无枢纽，$g(\mu)$ 对任何单个创作者的退出不敏感。
- (N5) $\alpha_{\text{net}} \to \infty$ 使帕累托分布方差 $\to 0$，信号噪声 $\sigma_s^2 \to 0$，但此效应归入 D2。

(ii) 个体状态空间降维——$n_i$ 成为常数，$\mathcal{S}$ 的有效维度从 8 降至 7：

$$
\mathcal{S}^{\text{D1}} = [0, \bar{\theta}] \times (0, \bar{W}] \times [0, \bar{T}] \times \Delta^4
$$

(iii) 均衡条件 (E1)–(E4) 不变。(E5) 的 $K_{\text{ext}}$ 仍然约束 $\omega_B + \omega_D + \omega_E \geq \underline{\omega}_{\text{floor}}$，但 $\text{Hub}$ 脆弱性消失，因为定理 6.1 第六步中 $\mathcal{P}_K$ 在 $\Phi$ 下的不变性更容易保证（命题 9.5(iii) 的额外进入条件不再需要）。

(iv) §9 的比较静态中，命题 9.4（市场分割）、9.4（枢纽脆弱性）**失去内容**——市场是统一的，没有枢纽。命题 9.1（收入冲击）、9.2（类型构成冲击）**保留完整**，因为它们通过价格和类型构成通道运作，不依赖网络。

各通道的退化由 $s \to 1$ 在 Jackson-Rogers 模型中的极限行为直接给出：$s = 1$ 时新节点只通过随机遇见连接，度分布为泊松分布，当 $m_\ell$ 大且 $N$ 有限时趋向完全图。$\pi_{ij} = 1$ 因为所有节点两两直接相连。$\text{Hub} = 0$ 因为最高度数 $= N-1$ 对所有节点相同。

### 11.2 无市场的原初形态

原初的同人社群应该是缺乏市场结构，只有无料结构的，这是因为初期出现同人作者的情况，经常是趁着官方的风而长大的，而在这个过程中，如果给作品贸然定价，则会影响作品在外部的传播性，这也就是下面讲述的损失的效用。关于小社群的原初形态，我们可以看成是一个无网络结构的无料均衡，这一点已经在[无料的形式化](https://seikasahara.com/zh/posts/gift/)工作中完成了。

但是纯无料均衡不是永远稳定的。当以下条件被满足时，$\bar{x}_{a_M} = 0$ 不再是所有创作者的最优选择。市场层将从零供给中自发涌现。

**定义 11.2（涌现偏离）**。在无料均衡 $(\mu^{\text{D0}}, \mathbf{x}^{\text{D0}})$ 下，考虑一个拥有类型 $\mathbf{q}$ 且 $q_A > 0$ 的创作者的偏离：将 $\varepsilon > 0$ 单位的精力从礼物配置转移到市场配置，以价格 $p > 0$ 出售。偏离的单期净收益为

$$
\Delta u(\varepsilon, p;\, s) \;=\; q_A \bigl[p \cdot r(\varepsilon, s) - c_M(\varepsilon)\bigr] \;-\; \sum_{k \neq A} q_k \cdot \ell_k(\varepsilon, s)
$$

其中 $r(\varepsilon, s)$ 是在状态 $s$ 下市场配置 $\varepsilon$ 产生的销售量，$c_M(\varepsilon)$ 是额外的市场渠道成本（印刷、摊位费等），$\ell_k(\varepsilon, s)$ 是 B/D/E 机制因礼物配置减少 $\varepsilon$ 而损失的效用，例如，互惠回路变少（$\ell_B$）、自我表达的公开覆盖面收窄（$\ell_D$）、社交接触点减少（$\ell_E$）。

**命题 11.3（市场涌现条件）**。纯无料均衡在以下三个条件**同时**满足时不稳定（即市场层涌现）：

**(M1) 质量分化**。创作者之间的作品质量方差 $\text{Var}_{\mu^{\text{D0}}}[\text{quality}_i]$ 超过阈值 $\underline{v}$ ——消费者能逐渐开始区分高，低质量，因此愿意为高质量支付正价格。

形式地：存在消费者保留价格 $\bar{p}(\text{quality}) > 0$ 对 $\mu^{\text{D0}}$-正测度集上的创作者成立。

**(M2) 成本压力**。高质量产出的精力成本 $E(\mathbf{x})$ 超过纯无料效用能持续承担的水平，存在一群边际创作者，他们在纯无料模式下面临热情预算 $W' \leq 0$，但若能获得市场收入则热情预算 $W' > 0$：

$$
\exists\; S_{\text{margin}} \subset \mathcal{S}^{\text{D0}}, \quad \mu^{\text{D0}}(S_{\text{margin}}) > 0:
$$

$$
\forall s \in S_{\text{margin}}:\quad W + u_k^{\text{gift}}(s, \mathbf{x}^{\text{D0}}) - E(\mathbf{x}^{\text{D0}}) \;\leq\; 0 \;<\; W + u_A^{\text{market}}(s, \mathbf{x}^{\text{dev}};\, p) - E(\mathbf{x}^{\text{dev}})
$$

即市场收入是这些创作者的**生存机制**，不是贪欲而是必需。

**(M3) 消费者支付意愿**。存在正测度的消费者群体愿意在价格 $p > 0$ 下购买承诺消费 $\gamma_H > 0$ 保证了这一点。$\gamma_H$ 单位的同人本需求由无料层的免费同人本满足。这时市场涌现要求边际创作者的作品质量显著高于无料层平均水平，使得消费者愿意**额外付费**获取差异化产品，而非仅消费免费版本。

**命题 11.4（涌现的相变性质）**。市场涌现不是渐进的，它是一个**相变**：

(i) 当 $\text{Var}[\text{quality}]$ 小时，消费者的保留价格 $\bar{p} \to 0$，这意味着所有作品质量相近，无理由付费，偏离收益 $\Delta u < 0$。当 $E$ 小时，纯无料模式下所有创作者热情预算 $W' > 0$，边际创作者集 $S_{\text{margin}} = \emptyset$，无生存压力驱动偏离。

(ii) 当 $\text{Var}[\text{quality}] > \underline{v}$ 且 $S_{\text{margin}}$ 非空时，$\Delta u(\varepsilon^*, p^*; s) > 0$ 对 $s \in S_{\text{margin}}$ 成立。这些创作者偏离后以正价格出售，获得市场收入。偏离者的存在创造了非零供给 $S_H > 0$，消费者模型的出清条件开始约束，价格 $p^*$ 从不存在跳跃到正值。

(iii) 相变来自 $\Delta u$ 的非线性结构：偏离收益在阈值以下为负（礼物层效用损失主导）、阈值以上为正（市场收入主导），且跨零点时斜率为正。

(iv) 不可逆性来自 A 型进入的正反馈：$\omega_A > 0$，这使得市场供给正，让价格信号得以存在，而吸引更多 A 型机制进入。逆向（回到 $\omega_A = 0$）需要所有 A 型机制同时退出，但每个 A 型机制行动的退出条件是 $W_i \leq 0$，而只要 $p^* > 0$ 且有正需求，A 型的 $W_i$ 就有正支撑。加上习惯粘性，这几乎不可能。

市场涌现**创造**了三角形的市场顶点，同时引入了 $\omega_A > 0$ 带来的类型构成张力。不可能三角因此不是同人市场的先天结构，而是**市场涌现的后果**。

---

# 附录1 命题 4.1 的完整证明

## 公理

**公理 A（Berge 极大值定理）**。设 $X$ 为紧 Hausdorff 空间，$\Theta$ 为拓扑空间，$f: X \times \Theta \to \mathbb{R}$ 连续，$\Gamma: \Theta \rightrightarrows X$ 为连续对应且取非空紧值。则：

- (a) 值函数 $V^*(\theta) = \max_{x \in \Gamma(\theta)} f(x, \theta)$ 连续；
- (b) argmax 对应 $x^*(\theta) = \arg\max_{x \in \Gamma(\theta)} f(x, \theta)$ 上半连续且取非空紧值。

**公理 B（Schauder 不动点定理）**。设 $C$ 为局部凸拓扑向量空间中的非空紧凸子集，$\Phi: C \to C$ 连续。则 $\Phi$ 有不动点。

**公理 C（Prokhorov 定理）**。设 $S$ 为完备可分度量空间。$\mathcal{M} \subset \mathcal{P}(S)$ 在弱拓扑下列紧当且仅当 $\mathcal{M}$ 是胎紧的。

## 正则性条件汇总

以下条件在整个证明中反复引用，统一编号以避免歧义。

**(R1)** $\mathcal{S} = [0, \bar{\theta}] \times (0, \bar{W}] \times [0, \bar{T}] \times [0, \bar{n}] \times \Delta^4$ 是 $\mathbb{R}^8$ 中的紧度量空间（赋以欧氏度量的子空间拓扑）。

**(R2)** 对每个 $k \in \{A,B,D,E\}$，回报函数 $(s, \mathbf{x}, p) \mapsto \langle u_k, \boldsymbol{\rho}(\mathbf{x}; p) \rangle - E(\mathbf{x})$ 在 $\mathcal{S} \times \mathbb{R}^d_+ \times \mathbb{R}^2_{++}$ 上连续且有界。

**(R3)** 对每个 $k \in \{A,B,D,E\}$，转移概率 $Q_k(\cdot \mid s, \mathbf{x}, p): \mathcal{S} \times \mathbb{R}^d_+ \times \mathbb{R}^2_{++} \to \mathcal{P}(\mathcal{S})$ 关于 $(s, \mathbf{x}, p)$ 弱连续。

即对任意有界连续 $\varphi: \mathcal{S} \to \mathbb{R}$，映射 $(s, \mathbf{x}, p) \mapsto \int \varphi(s')\, Q_k(ds' \mid s, \mathbf{x}, p)$ 连续。$Q_k$ 对 $k$ 的依赖来自热情预算转移 $W' = W + u_k(s, \mathbf{x}) - E(\mathbf{x})$；对 $\mathbf{x}$ 的依赖来自声誉转移 $\theta' = [\theta + \gamma_j I q^D(\mathbf{x}; p)] \xi^{\text{shock}}$ 和热情预算转移中的 $E(\mathbf{x})$。在后续引理中，当转移核在策略 $\mathbf{x}_k^*$ 处求值时，记 $Q_k^*(ds' \mid s, p) = Q_k(ds' \mid s, \mathbf{x}_k^*(s; p), p)$。

**(R4)** $\beta \in (0,1)$。

**(R5)** 可行集对应 $X: \mathcal{S} \rightrightarrows \mathbb{R}^d_+$（$X(s)$ 为状态 $s$ 下的可行创作集合）是连续对应且取非空紧值。在标准正则条件下，argmax 为单值连续函数。

**(R6)** $f: [0, \bar{\theta}] \to \mathbb{R}_+$ 连续且有界（命题 4.1 条件 (i)）。

**(R7)** 声誉转移 $(\theta, p, \mathbf{x}) \mapsto \theta'$ 的条件分布关于 $(\theta, p, \mathbf{x})$ 弱连续（命题 4.1 条件 (ii)；是 (R3) 在 $\theta$ 边际上的投影）。

**(R8)** 需求函数 $Q^*_H, Q^*_L: \mathbb{R}^2_{++} \times \mathbb{R}_{++} \to \mathbb{R}_+$ 关于 $(p, m)$ 连续，且对自价格严格递减（命题 4.1 条件 (iii) + 命题 5.1 条件 (i)）。

**(R9)** 供给函数 $S_H, S_L$ 对自价格弱递增；在价格边界处（$p_j \to 0^+$ 或 $p_j \to +\infty$）需求超过供给（命题 5.1 条件 (ii)(iii)）。

**(R10)** 存活概率 $\psi(s; p) = \mathbb{P}(W'(s,p) > 0) \cdot (1 - p^{\text{exo}}_{\text{exit}}(T, \mathbf{q}))$ 关于 $(s, p)$ 连续，$0 \leq \psi \leq 1$。

**(R11)** $\lambda_{\text{entry}} > 0$，$\nu_{\text{entry}} \in \mathcal{P}(\mathcal{S})$ 固定。

---

## 转移核的精确定义

§2.3 对 $\mathcal{T}_\mu$ 的描述是非形式的。为了证明的自洽，给出如下精确定义。

**定义（转移核）**。给定 $(\mu, p) \in \mathcal{P}(\mathcal{S}) \times \mathbb{R}^2_{++}$，定义 $\mathcal{T}_\mu(\mu, p) \in \mathcal{P}(\mathcal{S})$ 为

$$
\mathcal{T}_\mu(\mu, p)(B) \;=\; \frac{\displaystyle\int_{\mathcal{S}} \psi(s;\, p)\, \bar{Q}(B \mid s, p)\, d\mu(s) \;+\; \lambda_{\text{entry}}\, \nu_{\text{entry}}(B)}{\displaystyle\int_{\mathcal{S}} \psi(s;\, p)\, d\mu(s) \;+\; \lambda_{\text{entry}}}
$$

对所有 Borel 集 $B \subseteq \mathcal{S}$，其中

$$
\bar{Q}(B \mid s, p) \;=\; \sum_k q_k\, Q_k^*(B \mid s, p) \;=\; \sum_k q_k\, Q_k\bigl(B \mid s,\, \mathbf{x}_k^*(s; p),\, p\bigr)
$$

是**混合涌现转移核**。

策略 $\mathbf{x}_k^*$ 已在 (R3) 的 $Q_k$ 中代入、再按类型权重 $\mathbf{q}$ 混合。这一混合反映了每期按 $\mathbf{q}$ 抽取机制 $k$、$k$ 独立执行最优策略的概率结构。

分子的第一项是存活者经混合涌现转移后落在 $B$ 中的加权概率；第二项是新进入者落在 $B$ 中的加权贡献。分母是归一化常数，保证 $\mathcal{T}_\mu(\mu, p) \in \mathcal{P}(\mathcal{S})$。分母有正下界 $\lambda_{\text{entry}} > 0$（由 (R11)），因此良定义。

---

## 证明

### 引理 1（值函数的连续性）

**陈述**。在 (R1)–(R5) 和公理 A 下，对每个固定的 $(\mathbf{q}, p) \in \Delta^4 \times \mathbb{R}^2_{++}$，Bellman 不动点 $V^*(\cdot\,; \mathbf{q}, p)$ 是 $\mathcal{S}$ 上的有界连续函数。进一步，$V^*$ 关于 $(s, p)$ 联合连续。

**证明**。定义 Bellman 算子 $\mathcal{T}$ 作用于有界连续函数空间 $C_b(\mathcal{S})$：

$$
(\mathcal{T} V)(s) \;=\; \sum_k q_k \max_{\mathbf{x} \in X(s)} \Bigl[\langle u_k, \boldsymbol{\rho}(\mathbf{x}; p)\rangle - E(\mathbf{x}) + \beta \int V(s')\, Q_k(ds' \mid s, \mathbf{x}, p)\Bigr]
$$

**$\mathcal{T}$ 映射 $C_b(\mathcal{S})$ 到 $C_b(\mathcal{S})$**。对每个 $k$，被最大化的目标函数关于 $(s, \mathbf{x})$ 连续：(R2) 给出回报连续、(R3) 给出 $(s, \mathbf{x}) \mapsto \int V\, dQ_k$ 连续（$Q_k$ 对 $(s, \mathbf{x}, p)$ 弱连续）、$V \in C_b$ 有界保证积分有限。可行集对应 $X$ 连续且取紧值 (R5)，$\mathcal{S}$ 紧 (R1)。由**公理 A(a)**，$\max_{\mathbf{x} \in X(s)}[\cdots]$ 关于 $s$ 连续。凸组合 $\sum_k q_k$ 保持连续性。有界性由 (R2) 和 $V$ 有界直接给出。

**$\mathcal{T}$ 是 $\beta$-压缩映射**。对任意 $V_1, V_2 \in C_b(\mathcal{S})$，

$$
\|\mathcal{T} V_1 - \mathcal{T} V_2\|_\infty \;\leq\; \sum_k q_k \cdot \beta \|V_1 - V_2\|_\infty \;=\; \beta \|V_1 - V_2\|_\infty
$$

其中不等式来自 $|\max f - \max g| \leq \max |f - g|$ 以及积分不放大 sup 范数。$(C_b(\mathcal{S}), \|\cdot\|_\infty)$ 是 Banach 空间、$\beta < 1$ (R4)，由 Banach 不动点定理，$V^*$ 存在唯一且属于 $C_b(\mathcal{S})$。

**关于 $p$ 的联合连续性**。将 $p$ 视为参数，把 Bellman 算子写成 $\mathcal{T}_p$。对任意 $p_1, p_2$，

$$
\|V^*(\cdot; p_1) - V^*(\cdot; p_2)\|_\infty \;\leq\; \frac{1}{1 - \beta}\, \|\mathcal{T}_{p_1} V^*(\cdot; p_2) - \mathcal{T}_{p_2} V^*(\cdot; p_2)\|_\infty
$$

（标准扰动引理：两个压缩算子的不动点距离 $\leq$ $(1-\beta)^{-1}$ 乘以算子差）。右端是回报函数和转移概率关于 $p$ 的变化量，由 (R2)(R3) 的连续性和 $\mathcal{S}$ 紧的一致连续性，当 $p_1 \to p_2$ 时趋于零。因此 $V^*(s, p)$ 关于 $(s, p)$ 联合连续。

### 引理 2（策略函数的联合连续性）

**陈述**。在引理 1 的条件及 (R5) 的正则条件下，对每个 $k$，策略函数 $\mathbf{x}^*_k: \mathcal{S} \times \mathbb{R}^2_{++} \to \mathbb{R}^d_+$ 关于 $(s, p)$ 连续。混合创作组合的策略$\bar{\mathbf{x}}(s; p) = \sum_k q_k\, \mathbf{x}^*_k(s; p)$ 亦然。

**证明**。固定 $p$。由引理 1，$V^*(\cdot; p)$ 有界连续；由 (R3)，$Q_k(\cdot \mid s, \mathbf{x}, p)$ 对 $(s, \mathbf{x})$ 弱连续。因此续值 $\beta \int V^*(s'; p)\, Q_k(ds' \mid s, \mathbf{x}, p)$ 关于 $(s, \mathbf{x})$ 连续。与 (R2) 的回报连续性合并，被最大化的目标函数：

$$
J_k(s, \mathbf{x}; p) \;=\; \langle u_k, \boldsymbol{\rho}(\mathbf{x}; p)\rangle - E(\mathbf{x}) + \beta \int V^*(s'; p)\, Q_k(ds' \mid s, \mathbf{x}, p)
$$

关于 $(s, \mathbf{x}, p)$ 联合连续（引理 1 给出了 $V^*$ 对 $p$ 的联合连续性，(R3) 给出了 $Q_k$ 对 $(s, \mathbf{x}, p)$ 的弱连续性）。

$X(s)$ 为连续对应且取非空紧值 (R5)。由**公理 A(b)**，$\mathbf{x}^*_k(s; p) = \arg\max_{\mathbf{x} \in X(s)} J_k(s, \mathbf{x}; p)$ 关于 $(s, p)$ 上半连续且取紧值。在严格凹 + Slater 条件下 argmax 为单值，上半连续的单值对应即为连续函数。

$\bar{\mathbf{x}} = \sum_k q_k \mathbf{x}^*_k$ 是连续函数的有限凸组合，仍连续。

### 引理 3（供给聚合的联合连续性）

**陈述**。映射 $(μ, p) \mapsto S_H(\mu, p) = \int_{\mathcal{S}} \bar{x}_{a_{H,M}}(s; p)\, d\mu(s)$ 关于 $(\mu, p)$（弱拓扑 $\times$ 欧氏拓扑）联合连续。$S_L$ 同理。

**证明**。设 $(\mu_n, p_n) \to (\mu, p)$（$\mu_n \to \mu$ 弱收敛，$p_n \to p$）。记 $h(s; p) = \bar{x}_{a_{H,M}}(s; p)$，由引理 2 知 $h$ 关于 $(s, p)$ 连续。将误差分解为：

$$
\Bigl|\int h(s; p_n)\, d\mu_n - \int h(s; p)\, d\mu\Bigr| \;\leq\; \underbrace{\Bigl|\int h(s; p_n)\, d\mu_n - \int h(s; p)\, d\mu_n\Bigr|}_{\text{(I)}} \;+\; \underbrace{\Bigl|\int h(s; p)\, d\mu_n - \int h(s; p)\, d\mu\Bigr|}_{\text{(II)}}
$$

**项 (II)**。$h(\cdot; p)$ 是 $\mathcal{S}$ 上的有界连续函数（引理 2 + $\mathcal{S}$ 紧 $\Rightarrow$ 有界）。由弱收敛定义，$\mu_n \to \mu$ 弱收敛蕴含 $\int h(\cdot; p)\, d\mu_n \to \int h(\cdot; p)\, d\mu$。故 $\text{(II)} \to 0$。

**项 (I)**。$|\text{(I)}| \leq \sup_{s \in \mathcal{S}} |h(s; p_n) - h(s; p)| \cdot \mu_n(\mathcal{S}) = \sup_{s \in \mathcal{S}} |h(s; p_n) - h(s; p)|$。因为 $\mathcal{S}$ 紧且 $h$ 关于 $(s, p)$ 联合连续，$h$ 在 $\mathcal{S} \times K$ 上一致连续（$K$ 为 $\{p_n\} \cup \{p\}$ 的任意紧邻域）。$p_n \to p$ 蕴含 $\sup_s |h(s; p_n) - h(s; p)| \to 0$。故 $\text{(I)} \to 0$。

### 引理 4（价格映射的连续性）

**陈述**。在 (R8)(R9) 下，价格映射 $p^*: \mathcal{P}(\mathcal{S}) \to \mathbb{R}^2_{++}$ 关于 $\mu$（弱拓扑）连续。

**证明**。定义超额需求

$$
Z(p, \mu) \;=\; \bigl(Q^*_H(p, m) - S_H(\mu, p),\;\, Q^*_L(p, m) - S_L(\mu, p)\bigr)
$$

由 (R8) 和引理 3，$Z$ 关于 $(p, \mu)$ 联合连续。

**$p^*(\mu)$ 唯一**。固定 $\mu$，$Q^*_j$ 对 $p_j$ 严格递减 (R8)，$S_j$ 对 $p_j$ 弱递增 (R9)，因此 $Z_j$ 对 $p_j$ 严格递减。零点若存在则唯一。边界条件 (R9) 保证零点存在（中值定理：$p_j \to 0^+$ 时 $Z_j > 0$，$p_j \to \infty$ 时 $Z_j < 0$；定理 5.1 的保证消费量 $\gamma_H > 0$ 保证 $p_j$ 不发散）。

**$p^*(\mu)$ 对 $\mu$ 连续**。设 $\mu_n \to \mu$ 弱收敛。序列 $\{p^*(\mu_n)\}$ 有界——由边界条件的一致性：承诺消费 $\gamma_H, \gamma_L > 0$ 给出需求正下界，$\mathcal{S}$ 紧保证供给有界，从而均衡价格被约束在紧集 $[\underline{p}, \bar{p}]^2 \subset \mathbb{R}^2_{++}$ 内。

由 Bolzano-Weierstrass 定理，$\{p^*(\mu_n)\}$ 有收敛子列 $p^*(\mu_{n_k}) \to \tilde{p}$。由 $Z$ 的联合连续性：

$$
Z(\tilde{p}, \mu) = \lim_{k} Z(p^*(\mu_{n_k}), \mu_{n_k}) = \lim_k 0 = 0
$$

故 $\tilde{p}$ 是 $Z(\cdot, \mu)$ 的零点。由唯一性，$\tilde{p} = p^*(\mu)$。

因为 $\{p^*(\mu_n)\}$ 的**每个**收敛子列都收敛到同一极限 $p^*(\mu)$，且 $\{p^*(\mu_n)\}$ 包含在紧集中，全序列收敛：$p^*(\mu_n) \to p^*(\mu)$。

### 引理 5（转移核的弱连续性）

**陈述**。映射 $(\mu, p) \mapsto \mathcal{T}_\mu(\mu, p)$ 关于 $(\mu, p)$（弱拓扑 $\times$ 欧氏拓扑）到 $\mathcal{P}(\mathcal{S})$（弱拓扑）连续。

**证明**。设 $(\mu_n, p_n) \to (\mu, p)$。需证对任意有界连续 $\varphi: \mathcal{S} \to \mathbb{R}$，

$$
\int \varphi\, d\mathcal{T}_\mu(\mu_n, p_n) \;\to\; \int \varphi\, d\mathcal{T}_\mu(\mu, p)
$$

由转移核的精确定义：

$$
\int \varphi\, d\mathcal{T}_\mu(\mu, p) \;=\; \frac{N(\mu, p)}{D(\mu, p)}
$$

其中

$$
N(\mu, p) = \int_{\mathcal{S}} \psi(s; p) \Bigl(\int \varphi(s')\, Q(ds' \mid s, p)\Bigr) d\mu(s) \;+\; \lambda_{\text{entry}} \int \varphi\, d\nu_{\text{entry}}
$$

$$
D(\mu, p) = \int_{\mathcal{S}} \psi(s; p)\, d\mu(s) \;+\; \lambda_{\text{entry}}
$$

**$N(\mu_n, p_n) \to N(\mu, p)$**。定义

$$
H(s; p) \;=\; \psi(s; p) \cdot \int \varphi(s')\, Q(ds' \mid s, p)
$$

$\psi$ 关于 $(s, p)$ 连续 (R10)。$\int \varphi(s')\, Q(ds' \mid s, p)$ 关于 $(s, p)$ 连续（(R3) 的弱连续性 + $\varphi$ 有界连续）。因此 $H$ 关于 $(s, p)$ 联合连续且有界（$|\psi| \leq 1$，$|\int \varphi\, dQ| \leq \|\varphi\|_\infty$）。

由与引理 3 完全相同的论证（分解为"$p$ 变化"和"$\mu$ 弱收敛"两项），$\int H(s; p_n)\, d\mu_n \to \int H(s; p)\, d\mu$。第二项 $\lambda_{\text{entry}} \int \varphi\, d\nu_{\text{entry}}$ 为常数。故 $N(\mu_n, p_n) \to N(\mu, p)$。

**$D(\mu_n, p_n) \to D(\mu, p)$**。与 $N$ 的论证相同，取 $\varphi \equiv 1$，则 $H$ 退化为 $\psi$，同样的一致连续性论证给出 $\int \psi(s; p_n)\, d\mu_n \to \int \psi(s; p)\, d\mu$。

根据比值收敛，$D(\mu, p) \geq \lambda_{\text{entry}} > 0$ (R11)，因此 $D$ 有正下界，比值 $N/D$ 连续地趋于极限。

### 命题 4.1（反馈环路的良定义性）

**良定义性**：$p^*(\mu)$ 存在且唯一（引理 4）。

$\mathcal{T}_\mu(\mu, p^*(\mu))$ 是 $\mathcal{S}$ 上的概率测度：非负性由定义显然（$\psi \geq 0$，$Q$ 和 $\nu_{\text{entry}}$ 为概率测度）；

全质量为 1 由分母归一化保证支撑在 $\mathcal{S}$ ，内因为 $Q(\cdot \mid s, p) \in \mathcal{P}(\mathcal{S})$ 且 $\nu_{\text{entry}} \in \mathcal{P}(\mathcal{S})$。

**弱连续性**：$\Phi$ 分解为

$$
\mu \;\xmapsto{\;\alpha\;}\; \bigl(\mu,\, p^*(\mu)\bigr) \;\xmapsto{\;\beta\;}\; \mathcal{T}_\mu\bigl(\mu,\, p^*(\mu)\bigr)
$$

- 映射 $\alpha: \mu \mapsto (\mu, p^*(\mu))$ 关于弱拓扑连续：第一分量为恒等映射（连续），第二分量 $p^*$ 弱连续（引理 4），故乘积映射连续。
- 映射 $\beta: (\mu, p) \mapsto \mathcal{T}_\mu(\mu, p)$ 关于（弱拓扑 $\times$ 欧氏拓扑）到弱拓扑连续（引理 5）。

连续映射的复合连续。故$\Phi = \beta \circ \alpha$ 弱连续。

---

# 附录2 命题7.1的完整证明

### 定义 7.2 的操作化

定义 7.2 的条件为

$$
\frac{d}{d\varepsilon}\bigg|_{\varepsilon=0} \Pi\bigl(\Phi(\mu^* + \varepsilon\, \delta\mu)\bigr) \;\in\; F\bigl(\Pi(\mu^*)\bigr)
$$

在稳态 $\Pi(\mu^*) = (g^*, \omega^*)$ 处，$g^*(\omega^*) = g^*$，因此 $F(g^*, \omega^*)$ 的 $g$-分量退化为 $\{0\}$。

为使命题非平凡，我们采用如下操作化：对 $\mu' = \mu^* + \varepsilon\, \delta\mu$ 在 $\mu^*$ 的邻域内，定义**单期增量**

$$
\Delta g(\mu') \;=\; g\bigl(\Phi(\mu')\bigr) - g(\mu'), \qquad \Delta\omega_k(\mu') \;=\; \omega_k\bigl(\Phi(\mu')\bigr) - \omega_k(\mu')
$$

投影兼容性要求 $(\Delta g, \Delta\omega)$ 落在 $F\bigl(\Pi(\mu')\bigr)$ 内：

$$
\Delta g(\mu') \;\in\; [\underline{\lambda}, \overline{\lambda}] \cdot \bigl(g^*(\omega(\mu')) - g(\mu')\bigr), \qquad |\Delta\omega_k(\mu')| \;\leq\; \mu_k
$$

在稳态处两侧均为零；非平凡内容在于**邻域内**的行为。将 $\mu' = \mu^* + \varepsilon\, \delta\mu$ 代入、两侧在 $\varepsilon$ 的领头阶展开（均为 $O(\varepsilon)$），除以 $\varepsilon$ 得到**线性化兼容性条件**：

> **(LC-g)** 对所有满足 $\delta\mu(\mathcal{S}) = 0$ 的符号测度 $\delta\mu$，记
> 
> $$
> \Delta \dot{g} \;=\; D(g \circ \Phi)|_{\mu^*}[\delta\mu] \;-\; Dg|_{\mu^*}[\delta\mu]
> $$
> 
> $$
> \mathrm{Gap} \;=\; \nabla g^*\big|_{\omega^*} \cdot D\omega|_{\mu^*}[\delta\mu] \;-\; Dg|_{\mu^*}[\delta\mu]
> $$
> 
> 若 $\mathrm{Gap} \neq 0$ 则 $\Delta\dot{g} / \mathrm{Gap} \in [\underline{\lambda}, \overline{\lambda}]$；若 $\mathrm{Gap} = 0$ 则 $\Delta\dot{g} = 0$。

> **(LC-ω)** 对所有 $k \in \{A,B,D,E\}$ 和所有满足 $\|\delta\mu\|_{\mathrm{TV}} \leq 1$ 的 $\delta\mu$：
> 
> $$
> \bigl|D(\omega_k \circ \Phi)|_{\mu^*}[\delta\mu] \;-\; D\omega_k|_{\mu^*}[\delta\mu]\bigr| \;\leq\; \mu_k
> $$

**命题 7.1的精确表述**。在命题4.1证明的正则条件 (R1)–(R11)、公理 A、以及如下两个条件下，(LC-g) 和 (LC-ω) 成立：

(i) 对 $\mu^*$-几乎所有 $s \in \mathcal{S}$，群体平均创作组合弹性

$$
\eta_G \;\stackrel{\text{def}}{=}\; \frac{\displaystyle\int_{\mathcal{S}} \psi^*(s)\, \widehat{\partial_p G}(s)\, d\mu^*(s)}{\displaystyle D^* \cdot \bar{G}'^{\,2} / |\partial_p Z^*|}
$$

（精确定义见引理 12）落在 $[\underline{\lambda}, \overline{\lambda}]$ 内。

(ii) 存活率的类型选择性和进入流的类型偏差满足

$$
\frac{1}{D^*}\Bigl[\|\psi^*(\cdot)(q_k(\cdot) - \omega_k^*)\|_\infty \;+\; |\dot{p}_{\max}| \cdot \bigl|\textstyle\int \partial_p\psi^* (q_k - \omega_k^*)\, d\mu^*\bigr|\Bigr] \;\leq\; \mu_k
$$

其中 $\dot{p}_{\max} = \sup_{\|\delta\mu\|_{\mathrm{TV}} \leq 1} |Dp^*[\delta\mu]|$。

---

## 额外记号

以下记号在4.1命题的基础上新增，适用于下面的论证。

**无料配置函数**。

$$
G(s, p) \;=\; \bar{x}_{a_{H,G}}(s;\, p) + \bar{x}_{a_{L,G}}(s;\, p)
$$

是状态 $s$、价格 $p$ 下的总无料配置。$G^*(s) = G(s, p^*)$。

**后继无料配置**。

$$
\widehat{G}(s, p) \;=\; \int_{\mathcal{S}} G(s', p)\, Q(ds' \mid s, p)
$$

是从状态 $s$ 经一步转移后的期望无料配置。$\widehat{G}^*(s) = \widehat{G}(s, p^*)$。

**群体弹性**。

$$
\bar{G}' \;=\; \int_{\mathcal{S}} \partial_p G(s, p^*)\, d\mu^*(s), \qquad \widehat{\partial_p G}(s) \;=\; \partial_p \widehat{G}(s, p^*)
$$

$\bar{G}'$ 是群体层面的无料配置对价格的弹性（负值，因为价格上升使创作者减少礼物配置）。

**进入者统计量**。

$$
\bar{q}_k^e \;=\; \int q_k\, d\nu_{\text{entry}}, \qquad g_e \;=\; \int G^*(s)\, d\nu_{\text{entry}}
$$

**超额需求的价格导数**。

$$
\partial_p Z^* \;=\; \partial_p Q^*\big|_{p^*} - \partial_p S\big|_{(\mu^*, p^*)}
$$

由 (R8)(R9)，$\partial_p Z^* < 0$（对角占优负定标量，逐分量处理时取同人本或同人谷的聚合）。

**目标函数** $g^*(\omega)$。给定类型构成 $\omega \in \Delta^4$，定义 $g^*(\omega)$ 为满足以下条件的值：在类型构成 $\omega$、稳态内条件分布 $\mu^*_k = \mu^*(\cdot \mid q \text{ is type } k)$ 不变的假设下，市场出清价格为 $p^*(\omega)$（隐函数确定），则

$$
g^*(\omega) \;=\; \sum_{k} \omega_k \int G\bigl(s,\, p^*(\omega)\bigr)\, d\mu^*_k(s) \;=\; \sum_k \omega_k\, G_k\bigl(p^*(\omega)\bigr)
$$

其中 $G_k(p) = \int G(s, p)\, d\mu^*_k$。在稳态处 $g^*(\omega^*) = g(\mu^*) = g^*$。

$$
\nabla_{\omega_k} g^*\big|_{\omega^*} \;=\; G_k^* \;+\; \bar{G}' \cdot \frac{\partial p^*}{\partial \omega_k}\bigg|_{\omega^*}
$$

第一项是直接效应（类型 $k$ 的人均礼物产出），第二项是价格效应（类型构成变化使得供给变化，市场的价格调整，使得创作组合再优化）。

---

## 第一部分：$\omega$ 分量的界

### 引理 6（类型守恒）

**陈述**：$\mathbf{q}_i$ 是状态的常数分量（§1.1），因此转移核 $Q$ 保持 $\mathbf{q}$ 不变：对任意 Borel 集 $A \subseteq \Delta^4$，

$$
Q\bigl(\{s' : \mathbf{q}_{s'} \in A\} \mid s, p\bigr) \;=\; \mathbf{1}[\mathbf{q}_s \in A]
$$

**证明**：$Q(\cdot \mid s, p)$ 是 $(\theta', W', T')$ 的联合分布，$\mathbf{q}$ 保持不变。 §1.1 明确标注 "$\mathbf{q}_i \in \Delta^4$ 为混合向量"。因此 $Q$ 在 $\mathbf{q}$ 维度上是 Dirac 测度 $\delta_{\mathbf{q}_s}$。

### 引理 7（$\omega_k \circ \Phi$ 的公式与 Gateaux 导数）

**陈述**：

(a) 对任意 $\mu \in \mathcal{P}(\mathcal{S})$，记 $p = p^*(\mu)$，

$$
\omega_k\bigl(\Phi(\mu)\bigr) \;=\; \frac{\displaystyle\int_{\mathcal{S}} \psi(s;\, p)\, q_k\, d\mu(s) \;+\; \lambda_e\, \bar{q}_k^e}{\displaystyle\int_{\mathcal{S}} \psi(s;\, p)\, d\mu(s) \;+\; \lambda_e}
$$

(b) 在 $\mu^*$ 处沿 $\delta\mu$（$\delta\mu(\mathcal{S}) = 0$）的 Gateaux 导数为

$$
D(\omega_k \circ \Phi)[\delta\mu] \;=\; \frac{1}{D^*}\biggl[\int \psi^*(q_k - \omega_k^*)\, d(\delta\mu) \;+\; \dot{p}\int (\partial_p\psi^*)(q_k - \omega_k^*)\, d\mu^*\biggr]
$$

其中 $\dot{p} = Dp^*|_{\mu^*}[\delta\mu]$。

**证明**：

(a) 由引理 6，$\int q_k\, Q(ds' \mid s, p) = q_k$（$q_k$ 穿过转移核），代入之前的精确定义即得。

(b) 记 $\mu_\varepsilon = \mu^* + \varepsilon\, \delta\mu$，$p_\varepsilon = p^*(\mu_\varepsilon)$，$N_k(\varepsilon) = \int \psi(s; p_\varepsilon) q_k\, d\mu_\varepsilon + \lambda_e \bar{q}_k^e$，$D(\varepsilon) = \int \psi(s; p_\varepsilon)\, d\mu_\varepsilon + \lambda_e$。则 $\omega_k(\Phi(\mu_\varepsilon)) = N_k/D$。

对 $\varepsilon$ 求导（商的导数）：

$$
\frac{d}{d\varepsilon}\bigg|_0 \frac{N_k}{D} \;=\; \frac{N_k'(0)\, D^* - N_k^*\, D'(0)}{(D^*)^2} \;=\; \frac{N_k'(0) - \omega_k^*\, D'(0)}{D^*}
$$

逐项计算：

$$
N_k'(0) = \int \psi^* q_k\, d(\delta\mu) + \dot{p}\int (\partial_p\psi^*) q_k\, d\mu^*
$$

$$
D'(0) = \int \psi^*\, d(\delta\mu) + \dot{p}\int \partial_p\psi^*\, d\mu^*
$$

代入，利用 $\delta\mu(\mathcal{S}) = 0$ 将 $\int \psi^* q_k\, d(\delta\mu) - \omega_k^* \int \psi^*\, d(\delta\mu) = \int \psi^*(q_k - \omega_k^*)\, d(\delta\mu)$，对 $\dot{p}$ 项同理。

### 引理 8（单期 $\omega$ 增量的界）

**陈述**。$\omega_k$ 的单期增量的线性化为

$$
\Delta\dot{\omega}_k \;=\; D(\omega_k \circ \Phi)[\delta\mu] \;-\; D\omega_k[\delta\mu]
$$

$$
= \;\frac{1}{D^*}\int (\psi^* - D^*)(q_k - \omega_k^*)\, d(\delta\mu) \;+\; \frac{\dot{p}}{D^*}\int (\partial_p\psi^*)(q_k - \omega_k^*)\, d\mu^*
$$

在条件 (ii) 下，$|\Delta\dot{\omega}_k| \leq \mu_k \cdot \|\delta\mu\|_{\mathrm{TV}}$。

**证明**：

由引理 7(b) 和 $D\omega_k[\delta\mu] = \int q_k\, d(\delta\mu) = \int (q_k - \omega_k^*)\, d(\delta\mu)$（利用 $\delta\mu(\mathcal{S}) = 0$）：

$$
\Delta\dot{\omega}_k = \frac{1}{D^*}\int \psi^*(q_k - \omega_k^*)\, d(\delta\mu) + \frac{\dot{p}}{D^*}\int (\partial_p\psi^*)(q_k - \omega_k^*)\, d\mu^* - \int (q_k - \omega_k^*)\, d(\delta\mu)
$$

$$
= \int (q_k - \omega_k^*) \frac{\psi^* - D^*}{D^*}\, d(\delta\mu) + \frac{\dot{p}}{D^*}\int (\partial_p\psi^*)(q_k - \omega_k^*)\, d\mu^*
$$

其中 $\psi^*(s) - D^* = \psi^*(s) - \bar{\psi}^* - \lambda_e$，$\bar{\psi}^* = \int \psi^*\, d\mu^*$。

**第一项**的绝对值 $\leq \frac{\|(\psi^* - D^*)(q_k - \omega_k^*)\|_\infty}{D^*} \cdot \|\delta\mu\|_{\mathrm{TV}}$。

**第二项**的绝对值 $\leq \frac{|\dot{p}|}{D^*} \bigl|\int (\partial_p\psi^*)(q_k - \omega_k^*)\, d\mu^*\bigr|$，而 $|\dot{p}| = |Dp^*[\delta\mu]| \leq \dot{p}_{\max} \cdot \|\delta\mu\|_{\mathrm{TV}}$（$Dp^*$ 是有界线性泛函，根据引理 4）。

条件 (ii) 正是要求上述两项之和 $\leq \mu_k \cdot \|\delta\mu\|_{\mathrm{TV}}$。

**注**。$\Delta\dot{\omega}_k$ 的被积函数中出现 $(q_k - \omega_k^*)$，即个体类型对群体均值的偏差。

这意味着 $\omega$ 的变化纯粹来自**差异化退出**（$\psi^*$ 对不同类型取不同值）和**差异化进入**（$\nu_{\text{entry}}$ 的类型构成不同于 $\omega^*$）。若所有类型的存活率相同且进入者的类型构成等于 $\omega^*$，则 $\Delta\dot{\omega}_k = 0$——类型构成不变。

---

## 第二部分：价格响应

### 引理 9（价格的 Gateaux 导数与单期价格增量）

**陈述**。

(a) 价格映射 $p^*$ 在 $\mu^*$ 处的 Gateaux 导数为

$$
Dp^*[\delta\mu] \;=\; -\frac{1}{\partial_p Z^*} \int \bar{x}_{a_M}^*(s)\, d(\delta\mu)(s)
$$

其中 $\bar{x}_{a_M}^*(s) = \bar{x}_{a_{H,M}}(s; p^*) + \bar{x}_{a_{L,M}}(s; p^*)$（逐分量处理时对 同人本和同人谷分别计算；此处取标量简化）。

(b) 定义**分布增量** $\sigma = D\Phi|_{\mu^*}[\delta\mu] - \delta\mu$。则**单期价格增量**为

$$
\Delta\dot{p} \;=\; Dp^*[D\Phi[\delta\mu]] - Dp^*[\delta\mu] \;=\; Dp^*[\sigma] \;=\; -\frac{1}{\partial_p Z^*}\int \bar{x}_{a_M}^*\, d\sigma
$$

**证明**：

(a) 市场出清条件 $Z(p, \mu) = Q^*(p, m) - S(\mu, p) = 0$ 在 $(p^*, \mu^*)$ 处对 $\mu$ 微分：

$$
\partial_p Z \cdot Dp^*[\delta\mu] + \partial_\mu Z[\delta\mu] = 0
$$

$\partial_\mu Z[\delta\mu] = -\partial_\mu S[\delta\mu] = -\int \bar{x}_{a_M}^*\, d(\delta\mu)$（供给对分布的响应）。由 $\partial_p Z^* \neq 0$（(R8)(R9) 保证），解出即得。

(b) $Dp^*$ 是线性泛函，对 $D\Phi[\delta\mu]$ 和 $\delta\mu$ 分别作用再取差。

---

## 第三部分：$g$ 分量的界

### 引理 10（$g \circ \Phi$ 的 Gateaux 导数）

**陈述**。$g(\nu) = \int G(s, p^*(\nu))\, d\nu(s)$ 在 $\mu^*$ 处沿 $\delta\nu$ 的 Gateaux 导数为

$$
Dg|_{\mu^*}[\delta\nu] \;=\; \int G^*(s)\, d(\delta\nu)(s) \;+\; Dp^*[\delta\nu] \cdot \bar{G}'
$$

因此

$$
D(g \circ \Phi)|_{\mu^*}[\delta\mu] \;=\; Dg|_{\mu^*}\bigl[D\Phi|_{\mu^*}[\delta\mu]\bigr] \;=\; \int G^*\, d\dot{\nu} \;+\; Dp^*[\dot{\nu}]\cdot \bar{G}'
$$

其中 $\dot{\nu} = D\Phi|_{\mu^*}[\delta\mu]$。

**证明**：$g(\mu^* + \varepsilon\, \delta\nu) = \int G(s, p^*(\mu^* + \varepsilon\, \delta\nu))\, d(\mu^* + \varepsilon\, \delta\nu)$。对 $\varepsilon$ 求导，乘积法则给出两项：分布变化项 $\int G^*\, d(\delta\nu)$ 和价格变化项 $Dp^*[\delta\nu] \cdot \int \partial_p G\, d\mu^* = Dp^*[\delta\nu] \cdot \bar{G}'$。

第二个等式来自链式法则 $D(g \circ \Phi) = Dg \circ D\Phi$ 和 $\Phi(\mu^*) = \mu^*$。

### 引理 11（单期 $g$ 增量的分解）

**陈述**。$g$ 的单期增量的线性化为

$$
\Delta\dot{g} \;=\; D(g \circ \Phi)[\delta\mu] - Dg[\delta\mu] \;=\; \underbrace{Dp^*[\sigma] \cdot \bar{G}'}_{\Delta\dot{g}_{\,\text{port}}} \;+\; \underbrace{\int G^*(s)\, d\sigma(s)}_{\Delta\dot{g}_{\,\text{comp}}}
$$

其中 $\sigma = D\Phi[\delta\mu] - \delta\mu$。

- $\Delta\dot{g}_{\,\text{port}}$ 是**内涵边际**：分布增量 $\sigma$ 改变市场出清价格 $\Delta\dot{p} = Dp^*[\sigma]$，价格变化通过群体弹性 $\bar{G}'$ 引起创作组合再优化。
- $\Delta\dot{g}_{\,\text{comp}}$ 是**外延边际**：分布增量 $\sigma$ 本身改变了谁在场，不同创作者有不同的 $G^*$。

**证明**：由引理 10 直接计算：

$$
\Delta\dot{g} = \bigl(\int G^*\, d\dot{\nu} + Dp^*[\dot{\nu}]\cdot \bar{G}'\bigr) - \bigl(\int G^*\, d(\delta\mu) + Dp^*[\delta\mu]\cdot \bar{G}'\bigr) = \int G^*\, d\sigma + Dp^*[\sigma]\cdot \bar{G}'
$$

### 引理 12（Gap 的公式与内涵边际的比例关系）

**陈述**。

(a) 线性化 Gap 为

$$
\mathrm{Gap} \;=\; \sum_k \nabla_{\omega_k} g^*\big|_{\omega^*} \int q_k\, d(\delta\mu) \;-\; Dg[\delta\mu]
$$

$$
= \int \bigl[\hat{G}(s) - G^*(s)\bigr]\, d(\delta\mu)(s) \;-\; Dp^*[\delta\mu] \cdot \bar{G}'
$$

其中 $\hat{G}(s) = \sum_k \nabla_{\omega_k} g^* \cdot q_k(s)$。

(b) 定义**群体调整弹性**

$$
\eta_G \;=\; \frac{\Delta\dot{g}_{\,\text{port}}}{\mathrm{Gap}_{\,\text{price}}}
$$

其中 $\mathrm{Gap}_{\,\text{price}} = -Dp^*[\delta\mu] \cdot \bar{G}'$ 是 Gap 的价格分量。则

$$
\eta_G \;=\; \frac{Dp^*[\sigma]}{Dp^*[\delta\mu]} \;=\; \frac{\displaystyle\int \bar{x}_{a_M}^*\, d\sigma}{\displaystyle\int \bar{x}_{a_M}^*\, d(\delta\mu)}
$$

这是分布增量 $\sigma$ 相对于原始扰动 $\delta\mu$ 在市场供给方向上的**衰减率**，即单期内通过价格机制传导的供给侧调整比例。

**证明**：

(a) $\nabla g^* \cdot D\omega[\delta\mu] = \sum_k \nabla_{\omega_k} g^* \int q_k\, d(\delta\mu) = \int \hat{G}(s)\, d(\delta\mu)$（$\hat{G}$ 的定义）。由引理 10，$Dg[\delta\mu] = \int G^*\, d(\delta\mu) + Dp^*[\delta\mu] \cdot \bar{G}'$。相减即得。

(b) 由引理 11，$\Delta\dot{g}_{\text{port}} = Dp^*[\sigma] \cdot \bar{G}'$。$\text{Gap}_{\text{price}} = -Dp^*[\delta\mu] \cdot \bar{G}'$（Gap 公式 (a) 的第二项，取负号是因为 $\bar{G}' < 0$ 和 $Dp^*[\delta\mu]$ 的符号约定）。

注意：$\bar{G}' \neq 0$（价格变化确实影响创作组合，否则不存在调整机制）。$\bar{G}'$ 在比值中约去。由引理 9(a)，$Dp^*$ 正比于 $\int \bar{x}_{a_M}^*\, d(\cdot)$，因此比值化简为供给侧积分之比。

### 引理 13（外延边际的 Lipschitz 界）

**陈述**。在条件 (ii) 下：

$$
|\Delta\dot{g}_{\,\text{comp}}| \;=\; \Bigl|\int G^*\, d\sigma\Bigr| \;\leq\; \|G^*\|_\infty \cdot \|\sigma\|_{\mathrm{TV}}
$$

而 $\|\sigma\|_{\mathrm{TV}} = \|(D\Phi - I)[\delta\mu]\|_{\mathrm{TV}}$ 受限于进入退出流速率：

$$
\|\sigma\|_{\mathrm{TV}} \;\leq\; C_\Phi \cdot \|\delta\mu\|_{\mathrm{TV}}
$$

其中 $C_\Phi$ 是 $D\Phi - I$ 的算子范数，由稳态的进入率 $\lambda_e$、存活率 $\psi^*$ 的变异性、以及价格响应的大小决定。当条件 (ii) 成立时，$C_\Phi$ 有界，因为 (ii) 约束了存活率的类型选择性（$\psi^*$ 对不同类型的差异不大）和进入流的类型偏差。

**证明**：

$|\int G^*\, d\sigma| \leq \|G^*\|_\infty \cdot \|\sigma\|_{\mathrm{TV}}$ 是测度积分的标准估计。

$\sigma = D\Phi[\delta\mu] - \delta\mu$ 是线性算子 $(D\Phi - I)$ 作用于 $\delta\mu$ 的结果。$(D\Phi - I)$ 在全变分范数下的算子范数 $C_\Phi$ 有限——因为 $D\Phi$ 是有界算子（引理 5 的弱连续性加 $\mathcal{S}$ 紧保证全变分范数控制弱拓扑）。

$C_\Phi$ 的大小由转移核的结构决定。在转移核的精确定义下：

$$
D\Phi[\delta\mu](B) = \frac{1}{D^*}\left[\int \psi^* Q^*(B|s)\, d(\delta\mu) + \dot{p} \int \partial_p[\psi Q(B|\cdot)]\, d\mu^* - \mu^*(B) D'(0)\right]
$$

$(D\Phi - I)[\delta\mu](B)$ 的全变分范数受 $\psi^*$ 的变异性、$\dot{p}$ 的大小、以及重归一化效应 $\mu^*(B) D'(0)$ 控制。条件 (ii) 约束了 $\psi^*$ 的类型选择性（不同类型的存活率差异小）和 $\dot{p}_{\max}$（价格对扰动的敏感度有界），因此 $C_\Phi$ 有界。

### 引理 14（包络定理：为什么 $\eta_G$ 等于创作组合弹性）

**陈述**。引理 12(b) 的比值 $\eta_G = Dp^*[\sigma] / Dp^*[\delta\mu]$ 在稳态处由群体层面的 创作组合弹性决定。具体地：

设 $\Phi$ 在 $\mu^*$ 处稳定（$D\Phi$ 的谱半径 $< 1$），则 $\sigma = (D\Phi - I)[\delta\mu]$ 将 $\delta\mu$ 在市场供给方向上的分量衰减，衰减率等于转移核对供给侧的单期调整比例。

在混合 Bellman 框架下，创作者的创作组合决策对价格的响应（包络定理）给出：

$$
\frac{\partial \bar{x}_{a_M}^*(s;\, p)}{\partial p} \;=\; -\frac{\partial \bar{x}_{a_G}^*(s;\, p)}{\partial p} \;+\; (\text{其他资产的交叉弹性})
$$

由创作组合约束（总配置有界），市场配置对价格的正响应与无料配置对价格的负响应互为镜像。引理 12(b) 的比值 $\eta_G$ 等价于：

$$
\eta_G \;=\; \frac{\text{供给侧在 }\sigma\text{ 方向上的投影}}{\text{供给侧在 }\delta\mu\text{ 方向上的投影}}
$$

条件 (i) 要求创作组合弹性 $\partial_p \bar{x}_{a_G}$ 落在 $[\underline{\lambda}, \overline{\lambda}]$ 对应的范围内，从而 $\eta_G \in [\underline{\lambda}, \overline{\lambda}]$。

这里的"弹性 $\to$ 衰减率"依赖以下链条：

1. **价格对分布扰动的响应**（引理 9）：$Dp^*[\delta\mu] \propto \int \bar{x}_{a_M}^*\, d(\delta\mu)$。
2. **分布增量的结构**：$\sigma = (D\Phi - I)[\delta\mu]$。在一步转移中，$D\Phi[\delta\mu]$ 是 $\delta\mu$ 经存活筛选、状态转移和进入补充后的像。$\sigma$ 度量了这一像与原扰动的差异。在市场供给维度 $\bar{x}_{a_M}^*$ 上的投影为：
   
   $$
   \int \bar{x}_{a_M}^*\, d\sigma = \int \bar{x}_{a_M}^*\, d(D\Phi[\delta\mu]) - \int \bar{x}_{a_M}^*\, d(\delta\mu)
   $$
   
   第一项是经一步动力学后的扰动供给，第二项是原始扰动供给。差值 = 单期内的供给侧调整量。
3. **供给侧调整量与创作组合弹性的关系**：转移核保持 $\mathbf{q}$ 不变（引理 6），仅改变 $(\theta, W, T)$。经一步转移后，创作者在新状态 $s'$ 和新价格 $p^*(\Phi(\mu'))$ 下重新优化创作组合。由混合 Bellman 的包络定理（定义 2.2 + 公理 A），创作组合对价格的响应为
   
   $$
   \bar{x}_{a_M}^*(s';\, p' + \Delta\dot{p}) \;\approx\; \bar{x}_{a_M}^*(s';\, p') \;+\; \partial_p \bar{x}_{a_M}^* \cdot \Delta\dot{p}
   $$
   
   聚合到群体层面并积分，供给侧调整量正比于 $\partial_p \bar{x}_{a_M}^*$ 的群体平均，即创作组合 弹性。
4. **弹性与衰减率的等价**：比值 $\eta_G = \int \bar{x}_{a_M}^*\, d\sigma / \int \bar{x}_{a_M}^*\, d(\delta\mu)$ 度量了"供给侧扰动经一步动力学后的残余比例"。创作组合弹性越高（创作者越积极地响应价格信号），$\sigma$ 在供给方向上的残余越大（因为创作者的创作组合响应放大了分布变化的供给效应），衰减率越高。条件 (i) 约束弹性的范围，从而约束 $\eta_G \in [\underline{\lambda}, \overline{\lambda}]$。

---

## 第四部分：组合证明

### 命题 7.1

**证明**：

**(LC-ω)**。由引理 8 直接给出。

**(LC-g)**。设 $\delta\mu$ 满足 $\delta\mu(\mathcal{S}) = 0$ 且 $\text{Gap} \neq 0$。

**第一步：分解。** 由引理 11：

$$
\Delta\dot{g} = \Delta\dot{g}_{\,\text{port}} + \Delta\dot{g}_{\,\text{comp}}
$$

由引理 12(a)，Gap 也分解为两个分量：

$$
\text{Gap} = \underbrace{\int [\hat{G}(s) - G^*(s)]\, d(\delta\mu)}_{\text{Gap}_{\text{comp}}} \underbrace{- Dp^*[\delta\mu] \cdot \bar{G}'}_{\text{Gap}_{\text{price}}}
$$

**第二步：内涵边际的比例关系。** 由引理 12(b)：

$$
\Delta\dot{g}_{\,\text{port}} = Dp^*[\sigma] \cdot \bar{G}' = \eta_G \cdot (-Dp^*[\delta\mu] \cdot \bar{G}') = \eta_G \cdot \text{Gap}_{\text{price}}
$$

由引理 14 和条件 (i)，$\eta_G \in [\underline{\lambda}, \overline{\lambda}]$。

**第三步：外延边际的吸收。** 由引理 13：

$$
|\Delta\dot{g}_{\,\text{comp}}| \leq \|G^*\|_\infty \cdot C_\Phi \cdot \|\delta\mu\|_{\text{TV}}
$$

类似地，$\text{Gap}_{\text{comp}} = \int [\hat{G} - G^*]\, d(\delta\mu)$ 满足 $|\text{Gap}_{\text{comp}}| \leq \|\hat{G} - G^*\|_\infty \cdot \|\delta\mu\|_{\text{TV}}$。

由引理 8 注中的分析，$\sigma$ 的**全变分范数**在条件 (ii) 下被约束为：$\sigma$ 对 $\omega$ 方向的分量被 $\mu_k$ 界住。条件 (ii) 同时保证了 $\Delta\dot{g}_{\text{comp}}$ 和 $\text{Gap}_{\text{comp}}$ 的关系受控。

关键结构性质是：**$G^*(s)$ 和 $\hat{G}(s)$ 在类型维度上的变异受限于 $\omega$ 的变异**——因为 $G(s, p) = \sum_k q_k\, x^*_{k, a_G}(s; p)$（混合涌现），$G^*$ 是 $\mathbf{q}$ 的线性函数（在固定 $(\theta, W, T, n, p)$ 下），而 $\hat{G}$ 也是 $\mathbf{q}$ 的线性函数。因此 $\Delta\dot{g}_{\text{comp}}$ 和 $\text{Gap}_{\text{comp}}$ 在 $\delta\mu$ 的 $\omega$-方向分量上同阶——它们的比值有界。

具体地：设 $\delta\mu$ 在类型维度上的投影引起的 $\omega$ 变化为 $D\omega[\delta\mu]$，则 $\Delta\dot{g}_{\text{comp}}$ 和 $\text{Gap}_{\text{comp}}$ 均可表为 $D\omega[\delta\mu]$ 的线性函数（模掉 $\omega$-正交方向的分量，后者对 $G^*$ 和 $\hat{G}$ 的积分贡献相等，在取差时消去）。

因此：

$$
\frac{\Delta\dot{g}}{\text{Gap}} = \frac{\eta_G \cdot \text{Gap}_{\text{price}} + \Delta\dot{g}_{\text{comp}}}{\text{Gap}_{\text{price}} + \text{Gap}_{\text{comp}}}
$$

当 $|\text{Gap}_{\text{comp}}| \ll |\text{Gap}_{\text{price}}|$ 时（价格通道主导），$\Delta\dot{g}/\text{Gap} \approx \eta_G \in [\underline{\lambda}, \overline{\lambda}]$。

当 $\text{Gap}_{\text{comp}}$ 不可忽略时，上式可改写为

$$
\frac{\Delta\dot{g}}{\text{Gap}} = \eta_G + \frac{\Delta\dot{g}_{\text{comp}} - \eta_G \cdot \text{Gap}_{\text{comp}}}{\text{Gap}}
$$

**余项** $R = \Delta\dot{g}_{\text{comp}} - \eta_G \cdot \text{Gap}_{\text{comp}}$ 的界：

$\Delta\dot{g}_{\text{comp}} = \int G^*\, d\sigma$ 和 $\text{Gap}_{\text{comp}} = \int [\hat{G} - G^*]\, d(\delta\mu)$ 均对 $\delta\mu$ 线性。$R$ 也线性。在 $\mathbf{q}$ 方向上，$G^*$ 和 $\hat{G}$ 都是 $\mathbf{q}$ 的仿射函数，$\sigma$ 在 $\mathbf{q}$ 方向上的分量正是 $\Delta\omega$（引理 8 约束的量）。因此

$$
|R| \leq C_R \cdot |\Delta\omega|_1 \cdot |\text{Gap}| \leq C_R \cdot \bigl(\textstyle\sum_k \mu_k\bigr) \cdot |\text{Gap}| \cdot \|\delta\mu\|_{\text{TV}}
$$

当 $\mu_k$ 足够小（条件 (ii) 的约束足够紧）时，$|R/\text{Gap}| < \min(\eta_G - \underline{\lambda},\; \overline{\lambda} - \eta_G)$，从而

$$
\frac{\Delta\dot{g}}{\text{Gap}} = \eta_G + \frac{R}{\text{Gap}} \in [\underline{\lambda}, \overline{\lambda}]
$$

**当 $\text{Gap} = 0$ 时**：$\text{Gap}_{\text{price}} = 0$ 且 $\text{Gap}_{\text{comp}} = 0$。由上述分析，$\Delta\dot{g}_{\text{port}} = \eta_G \cdot 0 = 0$ 且 $|\Delta\dot{g}_{\text{comp}}| \leq C_R \cdot |\Delta\omega|_1 \cdot |\text{Gap}| = 0$。故 $\Delta\dot{g} = 0$。
