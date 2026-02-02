---
title: "二変数関数のテイラーの展開式証明とLatex使用練習"
published: 2021-10-17
description: ""
image: ""
tags: ["二元函数"]
category: "数学"
draft: false
---

Q.1 二変数の関数のテイラーの展開式を証明しなさい。
ある二変数関数
$$
z=f(x,y)
$$


が領域でn+1回連続偏微分可能であり、
$$
\small(x_{0},y_{0})　と　(x_{0}+h,y_{0}+k) (h,k \in R)
$$
は関数上にて、その結ぶ線も領域Dに属するとき
$$
\scriptsize f(x_{0}+h,y_{0}+k)=f(x_{0},y{0})+(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})f(x_{0},y_{0})+\\ \scriptsize \frac{1}{2!}(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^2f(x_{0},y_{0})+\cdots+\frac{1}{n!}(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^nf(x_{0},y_{0})+R_{n}
$$
が存在する、

一般的に
$$
\scriptsize (h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^nf(x_{0},y_{0}) \rightarrow \sum_{p=0}^{m}C_{m}^{p}h^pk^{m-p} \frac{\partial^{m}f}{\partial x^p \partial y^{m-p}}\lvert_{(x_{0},y_{0})}
$$

$$
\scriptsize R_{n}=\frac{1}{(n+1)!}(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^{n+1}f(x_{0}+\theta h,y_{0}+\theta k)(\theta \in (0,1))
$$

証明：

関数
$$
z=f(x_{0}+h,y_{0}+k)
$$
定数tを引用して、
$$
z(t)=f(x_{0}+ht,y_{0}+kt) (t \in [0,1])
$$
とおく
$$
\scriptsize z(0)=f(x_{0},y_{0}),z(1)=f(x_{0}+h,y_{0}+k)
$$

$$
\scriptsize z'(t)=h\frac{\partial}{\partial x}z(t)+k\frac{\partial}{\partial y}z(t)
$$

$$
\scriptsize \rightarrow z'(t)=(h\frac{\partial}{\partial x}+k\frac{\partial}{\partial y})z(t)
$$

$$
\scriptsize z''(t)=h^2\frac{\partial^2}{\partial^2 x}z(t)+2h\frac{\partial^2}{\partial x \partial y}z(t)+k^2\frac{\partial^2}{\partial^2y}z(t)
$$

$$
\scriptsize \rightarrow z''(t)=(h\frac{\partial}{\partial x}+k\frac{\partial}{\partial y})^2z(t)
$$


$$
\scriptsize z^{{\underbrace{ ''\cdots''}_{n+1}}} (t)  \rightarrow z^{n+1}(t)=(h\frac{\partial}{\partial x}+k\frac{\partial}{\partial y})^{n+1}z(t)
$$

z(t)は、マククローリンの定理を適用すると、t=1のときに展開する、
$$
\scriptsize z(1)=z(0)+z'(0)+\frac{1}{2!}z''(0)+\cdots+\frac{1}{n!}z^{n}(0)+\frac{1}{(n+1)!}z^{n+1}(\theta) \\(\theta \in (0,1))
$$
代入すると、
$$
\scriptsize f(x_{0}+h,y_{0}+k)=f(x_{0},y{0})+(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})f(x_{0},y_{0})+\frac{1}{2!}(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^2f(x_{0},y_{0})+\cdots+\\ \scriptsize \frac{1}{n!}(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^nf(x_{0},y_{0})+\frac{1}{(n+1)!}(h \frac{\partial}{\partial x}+k \frac{\partial}{\partial y})^{n+1}f(x_{0}+\theta h,y_{0}+\theta k)(\theta \in (0,1))
$$
が得る。

Q.E.D