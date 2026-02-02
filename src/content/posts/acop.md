---
title: "Python实现利用蒙特卡洛法求Pi的值"
published: 2021-11-14
description: ""
image: "/images/posts/acop-3790d821.webp"
tags: ["蒙特卡洛法"]
category: "python"
draft: false
---
# 蒙特卡洛法的介绍：

蒙特卡洛（Monte Carlo）法是一类**随机算法**的统称。

蒙特卡罗方法解题过程的三个主要步骤：

（1）构造或描述概率过程

对于本身就具有随机性质的问题，如粒子输运问题，主要是正确描述和模拟这个概率过 程，对于本来不是随机性质的确定性问题，比如计算定积分，就必须事先构造一个人为的概率过程，它的某些参量正好是所要求问题的解。即要将不具有随机性质的问题转化为随机性质的问题。

（2）实现从已知概率分布抽样

构造了概率模型以后，由于各种概率模型都可以看作是由各种各样的概率分布构成的，因此产生已知概率分布的随机变量（或随机向量），就成为实现蒙特卡罗方法模拟实验的基本手段，这也是蒙特卡罗方法被称为随机抽样的原因。最简单、最基本、最重要的一个概率分布是（0，1）上的均匀分布（或称矩形分布）。随机数就是具有这种均匀分布的随机变量。随机数序列就是具有这种分布的总体的一个简单子样，也就是一个具有这种分布的相互独立的随机变数序列。由此可见，随机数是我们实现蒙特卡罗模拟的基本工具。

（3）建立各种估计量

一般说来，构造了概率模型并能从中抽样后，即实现模拟实验后，我们就要确定一个随机变量，作为所要求的问题的解，我们称它为无偏估计。建立各种估计量，相当于对模拟实验的结果进行考察和登记，从中得到问题的解。

# 计算pi的n种方式

在近代，pi的计算可以巧妙的利用反三角函数和级数积分进行计算，这便是莱布尼茨级数的收敛结果，可以得到


$$
\frac{\pi}{4} = 1 - \frac{1}{3}+\frac{1}{5}-\frac{1}{7}+\frac{1}{9}-\frac{1}{11}+...
$$


当然，更好玩的方式是通过频率-概率计算，那么如何实现呢？

很显然在连续的几何概型中：

如果一个单位圆在坐标轴的正中央，被一个2x2的正方形刚好包裹，那么在上面任意投掷一点，在圆内的概率便是pi/4,很显然，这类概率可以通过频率去逼近。

对于大量，重复的随机点分布，可以利用Python的Turtle库和Random库，都是非常基础的Python包，那么代码实现如下：

```python
#Radius is half of the sqare's length
import turtle
import math
import random as r

a = turtle.Turtle()

a.color('blue')

def pink():
    color = (1,r.random(),1)
    return color

def circle():
    '''circle drawing'''
    a.penup()
    a.goto(50,0) #circle center align
    a.pendown()
    a.circle(50) #circle radius
    a.begin_fill()
    a.fillcolor(pink())
    a.end_fill()

b = turtle.Turtle()

b.color('red')

def square():
    '''square drawing'''
    for i in range(4):
        b.forward(100) #square length
        b.left(90)
        b.begin_fill()
        b.fillcolor(pink())
        b.end_fill()

c = turtle.Turtle()

def blue():
    c.begin_fill()
    c.fillcolor('blue')
    c.end_fill()
    c.penup()


def red():
    c.begin_fill()
    c.fillcolor('red')
    c.end_fill()
    c.penup()


def Montecarlo(n):
    '''Points Generate'''
    points = []
    count = 0
    for i in range(n):
        raw = r.random()*100
        colomn = r.random()*100
        xy = (raw,colomn)
        points.append(xy)
        #print(xy)
        for x,y in points:
            distance = math.sqrt((x-50)**2+(y-50)**2)
        if distance <= 50: #in circle
            blue()
            c.goto(x,y)
            c.stamp()
            c.goto(x,y)
            c.up()
            count += 1
        else: #out of circle
            red()
            c.goto(x,y)
            c.stamp()
            c.goto(x,y)
            c.up()
    PI = count*4/n
    return PI

if __name__ == '__main__':
    wn = turtle.Screen()
    wn.tracer(12,25)
    wn.setworldcoordinates(0,0,100,100)
    circle()
    square()
    print("Pi approximate to:" + str(Montecarlo(2000))) 
```

终端输出结果为

```
Pi approximate to:3.1468
```