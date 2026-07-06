---
title: "量子决策论的遐想和同人消费者的剪影"
published: 2026-07-06
description: ""
image: "/images/blog/renko.webp"
tags: ["量子决策论","经济学"]
category: "经济学"
draft: false
---

在一次同人展上，A 社团卖两样东西：$n$ 本同人志（记 $A_b$），$m$ 个吧唧（记 $A_g$）。B 社团也卖同样两样：$x$ 本同人志（记 $B_b$），$y$ 个吧唧（记 $B_g$）。这四样东西构成消费者要面对的选择空间。

假设现场有两个消费者$I$和$J$。$I$ 是 A 社团的粉丝，本子和吧唧对他来说无所谓，但社团必须是 A。$J$ 反过来，对社团没有执念，只想多收集好看的吧唧来满足自己的谷包需求。

在显示偏好弱公理下，如果消费者对商品的偏好由一个不随场景变化的概率测度描述，那么先选社团再选载体、先选载体再选社团这两种决策顺序，算出来的联合概率，比如最终买到 B 社团本子的概率，应该是同一个数，因为经典概率论里联合分布是一个确定的量，先对哪个维度求边际都不改变结果。

但现实里顺序经常改变答案。一个只认 A 社团的人，在按社团分区的场馆里几乎不会碰 B 社团的东西，可要是场馆按本子和谷子分区，假如这个人先钻进同人志大棚、周围全是各家本子时，买一本 B 社团本子的概率会明显上去。

这类现象在经典框架里没有容身之处。一个固定的联合分布，无论先对社团求边际还是先对载体求边际，给出的都是同一组数，无法解释顺序造成的差异。要容纳它，就得换一种表示，把这两个问题看成两次会互相搅动状态的测量，先做哪一个，都会把状态推到不同的地方，于是后一次测量面对的已经不是原来那张固定的概率，这很类似于量子力学里的不可对易性，因此，我们来到了量子决策论的领地。

## 同人展上的量子决策论模型

量子决策论（quantum decision theory）就是为处理这类现象而起的一支新兴流派。这类模型认为，认知状态可以被看作希尔伯特空间（Hilbert space）里的向量，一次决策看成一次投影测量，概率由玻恩规则生成。经典概率把所有事件塞进一个联合分布，量子概率允许几组测量互不对易，改变环境的顺序会改变人的行动。

心理学一侧，Busemeyer 和 Pothos 把决策前的权衡写成希尔伯特空间里的动力学，2012 年 Busemeyer 和 Bruza 的书把它系统化，Khrennikov 更早就主张用语境概率描述心理和经济行为，Aerts 一系从概念组合里找量子结构；经济学一侧，Danilov 和 Lambert-Mogiliansky 用不可对易测量重写决策理论，Yukalov 和 Sornette 给出另一套带干涉项的版本。这些做法记号和侧重各异，共同点都是放弃顺序无关的联合分布，换成一组不可对易的测量。

我们可以观察到，逛展的人在掏钱之前，今天买什么通常说不清，手里有预算和一份模糊的想买清单，但具体买哪本、买不买谷子，往往到摊位前才定。组织这份未定倾向的，主要是两个二分问题，哪个社团、本子还是谷子。我们把这种尚未定型、由两个二分维度张成的倾向，记为二维实向量空间里的一个单位向量 $|\psi\rangle$。

下面会用到量子力学的狄拉克符号（Dirac notation），为了尊重原模型的形式，我尽可能使用狄拉克符号，但是我本人并不喜欢这种标记。

- $|\psi\rangle$ 是一个列向量，这里取单位长度；
- $\langle\psi|$ 是它的共轭转置行向量，实向量时就是转置 $\psi^\top$，复向量时是 $\psi^\dagger$；
- $\langle\phi|\psi\rangle$ 是内积 $\phi^\top\psi$；
- $|\langle\phi|\psi\rangle|^2$ 是这个内积的平方；
- $|A\rangle\langle A|$ 是外积，一个投影矩阵 $AA^\top$；
- $\langle\psi|M|\psi\rangle$ 是二次型 $\psi^\top M\psi$。

一个只逛 A 社团的常客，在很多场展会里并非每次都只买 A 社团的制品，很显然，偶尔也会带走别的，而且一个人对某社团的倾向越强，实际买它的频率越高，倾向强度和选择频率之间有一个可观察的单调关系。对此现象，我们可以假设，我们给定一组标准正交基 $\{|e_1\rangle,|e_2\rangle\}$，沿这组基做一次二选一，以概率 $|\langle e_1|\psi\rangle|^2$、$|\langle e_2|\psi\rangle|^2$ 坍缩到对应选项。内积平方保证倾向与某选项越接近、买它的概率越大，这是玻恩规则（Born rule）被借来充当认知决策的概率生成方式。

假设某个消费者排队走到了 A 社团摊位前，注意到，接下来在本子和谷子之间的选择，是以已经站在 A 摊位的身份做的，不会退回刚进门时那个还没决定的自己，这意味着，前一个决定改变了后一个决定的出发点。对此现象，我们可以假设，连续两次二选一时，第二次测量代入第一次坍缩后的状态，原始的 $|\psi\rangle$ 已经不再是出发点。

社团和作品种类是切分同一批商品的两种偏好测量维度，而且不重合。同一本 A 社团本子，既是 A 社团的东西，也是一本本子，按社团归类和按载体归类是两个不同的动作。经验上这两个问题互相干扰，当环境逼消费者先定哪个社团时，本子还是谷子这条线在注意力里会变淡，反过来也一样，先问哪个会改变另一个的答案。对此现象，我们可以假设，选社团的基 $\{|A\rangle,|B\rangle\}$ 与选载体的基 $\{|Book\rangle,|Good\rangle\}$ 相差一个夹角 $\theta$。$\theta=0°$ 时两组基完全重合；$\theta$ 增大到 $90°$ 又会绕回基重合的情形，只是 $Book,Good$ 与 $A,B$ 的对应关系反过来（$|Good\rangle=-|A\rangle$），所以真正有意义的范围是 $\theta\in(0°,90°)$，$\theta$ 越大代表两把尺子切得越不一样。

很显然，不同人对社团的忠诚度不同，而且强弱能从行为里读出来。对此现象，我们可以假设，把消费者 $I$ 的状态 $|\psi_I\rangle$ 相对于 $|A\rangle$ 的夹角记为 $\varphi$，$\varphi$ 越小越忠诚，第一次测量坍缩到 $|A\rangle$ 的概率越高。$\varphi$ 是一个原则上可测的行为参数，这里当作给定。

在假设四下：

$|A\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$，$|B\rangle = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$，$|Book\rangle = \begin{bmatrix} \cos\theta \\ \sin\theta \end{bmatrix}$，$|Good\rangle = \begin{bmatrix} -\sin\theta \\ \cos\theta \end{bmatrix}$

在假设五下：

$|\psi_I\rangle = \begin{bmatrix} \cos\varphi \\ \sin\varphi \end{bmatrix}$

![两组测量基与消费者状态](/images/blog/qdt_geometry.png)

> 图1：两组测量基与消费者状态。社团基和载体基相差夹角 $\theta$，状态偏离 $A$ 的角度是忠诚角 $\varphi$。按照玻恩规则，沿某个方向做选择，就是把状态投影到那条轴上，投影长度的平方是选中它的概率。

## 两条动线，两个概率

假设展会方布置摊位的时候使得刚好是把消费者喜欢的社团 $A$ 排在了动线的最前方：

因此我们视作按社团购买的决策优先：先测 $\{A,B\}$，再测 $\{Book,Good\}$。

第一次测量，按假设二：$P(A)=\cos^2\varphi$，$P(B)=\sin^2\varphi$。

按假设三，第二次测量分别在两个坍缩后的分支上进行。坍缩到 $|A\rangle$ 的分支里，$P(Book|A)=\cos^2\theta$，$P(Good|A)=\sin^2\theta$；坍缩到 $|B\rangle$ 的分支里，$P(Book|B)=\sin^2\theta$，$P(Good|B)=\cos^2\theta$。

四条分支的联合概率：

$P(A,Book)=\cos^2\varphi\cos^2\theta$，$P(A,Good)=\cos^2\varphi\sin^2\theta$

$P(B,Book)=\sin^2\varphi\sin^2\theta$，$P(B,Good)=\sin^2\varphi\cos^2\theta$

这里关心的是 $P(B,Book)$：社团忠诚度为 $\varphi$ 的消费者，在先看到社团的顺序下，最终买到 B 社团本子的概率。

假设展会方布置摊位的时候是按作品分区排布的

因此我们视作按载体的决策优先：先测 $\{Book,Good\}$，再测 $\{A,B\}$。

第一次测量：$\langle Book|\psi_I\rangle=\cos\theta\cos\varphi+\sin\theta\sin\varphi=\cos(\theta-\varphi)$，所以 $P(Book)=\cos^2(\theta-\varphi)$；同理 $\langle Good|\psi_I\rangle=-\sin(\theta-\varphi)$，$P(Good)=\sin^2(\theta-\varphi)$。

第二次测量：坍缩到 $|Book\rangle$ 的分支里，$P(A|Book)=\cos^2\theta$，$P(B|Book)=\sin^2\theta$；坍缩到 $|Good\rangle$ 的分支里，$P(A|Good)=\sin^2\theta$，$P(B|Good)=\cos^2\theta$。

四条分支的联合概率：

$P(Book,A)=\cos^2(\theta-\varphi)\cos^2\theta$，$P(Book,B)=\cos^2(\theta-\varphi)\sin^2\theta$

$P(Good,A)=\sin^2(\theta-\varphi)\sin^2\theta$，$P(Good,B)=\sin^2(\theta-\varphi)\cos^2\theta$

这里关心的是 $P(Book,B)$：同一个消费者，在先分载体的顺序下，买到 B 社团本子的概率。

显然，$P(B,Book)$ 和 $P(Book,B)$ 描述的是同一个事件。两者都带公因子 $\sin^2\theta$，提出来之后，两者的差是：

$P(Book,B)-P(B,Book)=\sin^2\theta\left[\cos^2(\theta-\varphi)-\sin^2\varphi\right]$

括号里用二倍角公式展开：$\cos^2(\theta-\varphi)-\sin^2\varphi=\dfrac{1+\cos(2\theta-2\varphi)}{2}-\dfrac{1-\cos2\varphi}{2}=\dfrac{\cos(2\theta-2\varphi)+\cos2\varphi}{2}$，再用和差化积化简为 $\cos\theta\cos(\theta-2\varphi)$。于是：

$$\Delta(\theta,\varphi) \equiv P(Book,B)-P(B,Book) = \sin^2\theta\,\cos\theta\,\cos(\theta-2\varphi)$$

大前提：显示偏好弱公理要求 $\Delta(\theta,\varphi)$ 对任意 $\theta,\varphi$ 都等于零。小前提：按假设二到四推出的 $\Delta(\theta,\varphi)$ 是上面这个不恒为零的三角函数表达式。结论：在假设二到四成立的条件下，只要 $\theta,\varphi$ 不落在使 $\Delta=0$ 的特殊取值上，测量顺序就会改变同一个初始状态导出的联合概率。

![两种动线下的四种联合概率](/images/blog/qdt_order_bars.png)

> 图2：同一个铁粉（$\theta=45°$、$\varphi=15°$）在两种动线下的四种联合概率。

$\Delta(\theta,\varphi)$ 什么时候等于零，我们可以看到，$\sin^2\theta=0$，即 $\theta=0°$，两组基重合，这时 $\Delta(\theta,\varphi)=0$；接下来，$\cos\theta=0$，即 $\theta=90°$，两组基重合但标签互换，也可以使得  $\Delta(\theta,\varphi)=0$；或者 $\cos(\theta-2\varphi)=0$，即 $\varphi=(\theta-90°)/2$，对某个具体的 $\theta$，消费者的初始状态恰好落在一个特殊角度上，使两种顺序碰巧可以算出同一个概率，使得  $\Delta(\theta,\varphi)=0$。除了这三种情形，$\Delta(\theta,\varphi)$ 一般不为零。

![顺序效应的全景](/images/blog/qdt_delta_heatmap.png)

> 图3：顺序效应 $\Delta(\theta,\varphi)$ 的全景。红为正、蓝为负、越白越接近零。右下那片深红是效应最强的区域，虚线和左边缘（$\theta=0$）是 $\Delta=0$ 的位置，黑点是上面用的算例。整张图里绝大部分区域都不是零，这正是经典图景要求处处为零却做不到的地方。

顺序会改变购买，这件事确实不一定非得需要量子诠释。一个平常的注意力故事也够用，例如，动线把哪个维度摆在前面，哪个就先抓住注意力，后面的选择基本可以这个基调上展开，先分社团和先分载体于是给出不同结果，这个诠释也是看起来很显然的。

但，我们注意到，社团优先是 $\cos^2\varphi\sin^2\theta+\sin^2\varphi\sin^2\theta=\sin^2\theta$，载体优先是 $\cos^2(\theta-\varphi)\sin^2\theta+\sin^2(\theta-\varphi)\sin^2\theta=\sin^2\theta$，两者相等。具体哪一支被顺序改变，这个因人而异，但错配的总量被固定在 $\sin^2\theta$ 上，与顺序无关，与人是谁也无关。一个自由的注意力模型，没有道理让两种顺序的总量正好相等，但是玻恩规则的投影结构却逼出这个结果。这个现象在[A Quantum Question Order Model Supported by Empirical Tests of an A Priori and Precise Prediction](https://onlinelibrary.wiley.com/doi/10.1111/tops.12040) 已经得到充分的实证，并且是学科，情景无关的。

![QQ 等式](/images/blog/qdt_qq.png)

> 图6：QQ 等式。两条单支概率随忠诚角 $\varphi$ 此消彼长，它们之间的阴影因人而异；但两种顺序的错配总量始终在 $\sin^2\theta$ 水平线上，既不随顺序动，也不随 $\varphi$ 动。

这意味着我们在这个范畴下将要挑战新古典经济学的显示偏好弱公理。

## 从实二维推广到厄米情形

到这里，购买被当成一次瞬时测量，消费者带着 $|\psi\rangle$ 走到摊位，测量，坍缩。真实的购买在进场和掏钱之间还有一段权衡的时间，这段时间里状态怎么变，也是需要考虑的。但是，一旦引入时间演化，实二维就不够用了，根据含时薛定谔方程，量子态在时间演化上依赖虚数$i$。因此，我们需要模型从实二维推广到一般的厄米（复矩阵，且其共轭转置矩阵等于其本身的形式）情形，

把两次测量写成投影算符（注意这里是外积形式） $P_A=|A\rangle\langle A|$、$P_B=|B\rangle\langle B|$、$P_{Book}$、$P_{Good}$。按 Lüders 更新规则，两种顺序下买到 B 社团本子的概率分别是 $P_1=\langle\psi|P_BP_{Book}P_B|\psi\rangle=|\langle B|\psi\rangle|^2\,|\langle Book|B\rangle|^2$ 和 $P_2=|\langle Book|\psi\rangle|^2\,|\langle B|Book\rangle|^2$。公因子 $|\langle B|Book\rangle|^2$ 对称，两者相减：

$$\Delta=|\langle B|Book\rangle|^2\Big(|\langle Book|\psi\rangle|^2-|\langle B|\psi\rangle|^2\Big)$$

这个式子对 $\mathbb{C}^2$ 里任意态、任意两组秩一测量都成立，代回实二维，我们可以重新得到 $\sin^2\theta\,\cos\theta\,\cos(\theta-2\varphi)$。所以顺序效应与坐标表象无关。

![离面自由度不扩大 Δ 的值域](/images/blog/qdt_coplanar.png)

> 图4：为什么实二维无损。固定 $\hat n_B$、$\hat n_{Book}$ 到状态 $\hat n_\psi$ 的夹角，$x$、$y$ 就定死了，只剩 $Book$ 绕 $\hat n_\psi$ 转出平面这一个自由度，它只改变 $z$。左边，$\hat n_{Book}$ 在锥面上扫过，落在 $\hat n_\psi$ 与 $\hat n_B$ 那张平面里的两个位置（青色）就是实二维摆得出的配置，转出平面（橙色）是复数才有的。右边，$\Delta$ 随离面方位角变化，最大和最小都落在共面处，离面配置只填中间。

上面每一支概率都只含两两 $|\langle\cdot|\cdot\rangle|^2$，没有出现任何相位。我们记 $x=\hat n_\psi\cdot\hat n_B$，$y=\hat n_\psi\cdot\hat n_{Book}$，$z=\hat n_B\cdot\hat n_{Book}$，由 $|\langle i|j\rangle|^2=(1+\hat n_i\cdot\hat n_j)/2$ 得 $\Delta=(1+z)(y-x)/4$。固定 $\hat n_\psi$ 之后，$x,y$ 由 $B,Book$ 各自到 $\psi$ 的角度都被固定，唯一带离面自由度的是 $z$，而 $z$ 在三条射线共面时取极值，$\Delta$ 对 $z$ 单调，所以实二维已经跑满了 $\Delta$ 的整个值域。

## 犹豫并不会永远收敛成行动

我们尽管在经典的论调里很少能看到有关消费者决策时间的研究，基本上也都认为基于消费者足够长的时间，则他们终将会行动并给出自己的答案，但是，在量子框架下，这种犹豫可能将会成为一种永久未解决的状态。在量子框架下，两次测量之间，状态按含时薛定谔方程 $\frac{d}{dt}|\psi(t)\rangle=-i\hat H|\psi(t)\rangle$ 演化，其解是 $|\psi(t)\rangle=e^{-i\hat Ht}|\psi(0)\rangle$。

二能级系统的任意厄米 $\hat H$ 都能写成 $\hat H=\mathbf h\cdot\boldsymbol\sigma$（略去只贡献全局相位的单位阵项），$\boldsymbol\sigma$ 是三个泡利矩阵。演化算符 $e^{-i\hat Ht}=\cos(|\mathbf h|t)\,I-i\sin(|\mathbf h|t)\,(\hat{\mathbf h}\cdot\boldsymbol\sigma)$ 一定带 $i$，实初态经它演化会长出虚部，这正是上面说的第二种情形，二维实平面装不下了。几何上，$e^{-i\hat Ht}$ 把 Bloch 向量绕轴 $\hat{\mathbf h}$ 以频率 $\omega=2|\mathbf h|$ 进动。

$A$ 对应 Bloch 北极 $\hat z$，消费者 $I$ 的实初态 $(\cos\varphi,\sin\varphi)$ 对应 Bloch 向量 $\hat n_0=(\sin2\varphi,0,\cos2\varphi)$。取一个进动轴不平行于 $A$–$B$ 轴的哈密顿量，为写出闭式让它绕 $\hat x$ 转，则 $\hat n(t)$ 在 $y$–$z$ 平面转，$z(t)=\cos2\varphi\cos\omega t$，买 A 的概率

$$P(A,t)=\frac{1+z(t)}{2}=\frac{1+\cos2\varphi\cos\omega t}{2}$$

在 $\cos^2\varphi$ 和 $\sin^2\varphi$ 之间振荡。振幅是 $\cos2\varphi$，等于初态偏离进动轴的程度，初态越接近进动轴摆得越小，越垂直摆得越大，一路从几乎必买 A 荡到几乎不买。

经典马尔可夫模型给消费者越多思考时间，信念单调将会收敛到一个平稳值，想得越久越确定；幺正演化给的是不收敛的振荡，指数上的 $i$ 决定了这一点。

![犹豫期的状态演化](/images/blog/qdt_deliberation.png)

> 图5：犹豫期的状态演化。左边，状态在 Bloch 球上绕进动轴 $\hat h$ 打转，走的是紫色轨道。右边，买 A 社团的概率随思考时间的变化，量子演化（蓝）在 $\cos^2\varphi$ 与 $\sin^2\varphi$ 之间来回振荡不肯停，经典马尔可夫（红）则单调滑向一个平稳值。想得越久，两者分道扬镳。

二能级的 $\hat H$ 只有一个方向 $\hat{\mathbf h}$ 和一个强度 $|\mathbf h|$。我们是不是可以认为，它可以被解析成 $\hat H=\hat V+\hat M(t)$，$\hat V$ 是相对稳定的内部价值，方向由消费者过去的历史固定，这也是消费者自由意志的体现，比如对某 CP 的偏好；$\hat M(t)$ 是外部即时刺激，摊主话术、当天的舆论，带时间依赖。两项合成的 $\hat{\mathbf h}$，即内部价值与外部刺激方向一致时，进动轴靠近初态，意愿几乎不动，人拿得定主意；两者方向差得远时，进动轴与初态接近垂直，意愿在必买和不买之间大幅摆动，这将使得震荡成为永久的悬而未决状态。
