---
title: Part I. Vector Calculus
layout: simple
---

> If you would like to understand the power and elegance of the vector symbol, let us see the different forms of Maxwell's equations:
>
>> - `Component form`:
>>
>>>  Equations of Magnetic Force:
>>> 
>>>  $$
\begin{aligned}
\mu \alpha & =\frac{d \mathrm{H}}{d y}-\frac{d \mathrm{G}}{d z} \\
\mu \beta & =\frac{d \mathrm{~F}}{d z}-\frac{d \mathrm{H}}{d x} \\
\mu \gamma & =\frac{d \mathrm{G}}{d x}-\frac{d \mathrm{~F}}{d y}
\end{aligned}
$$
>>
>>> Equations of Current:
>>> 
>>> $$
\begin{aligned}
& \mathrm{P}=-\frac{d \mathrm{~F}}{d t}-\frac{d \Psi}{d x} \\
& \mathrm{Q}=-\frac{d \mathrm{G}}{d t}-\frac{d \Psi}{d y} \\
& \mathrm{R}=-\frac{d \mathrm{H}}{d t}-\frac{d \Psi}{d z}
\end{aligned}
$$
>>
>>> Equations of Electromotive Force:
>>> 
>>> $$
\begin{aligned}
\mathrm{P} & =\mu\left(\gamma \frac{d y}{d t}-\beta \frac{d z}{d t}\right)-\frac{d \mathrm{~F}}{d t}-\frac{d \Psi}{d x} \\
\mathrm{Q} & =\mu\left(\alpha \frac{d z}{d t}-\gamma \frac{d x}{d t}\right)-\frac{d \mathrm{G}}{d t}-\frac{d \Psi}{d y} \\
\mathrm{R} & =\mu\left(\beta \frac{d x}{d t}-\alpha \frac{d y}{d t}\right)-\frac{d \mathrm{H}}{d t}-\frac{d \Psi}{d z}
\end{aligned}
$$
>>
>> $$\vdots$$
>>
>><p align="right">-- Clerk Maxwell, A Dynamical Theory of the Electromagnetic Field, 1865</p>
>> There are 20 equations in total in component form when Maxwell first wrote down the equations.
>>
>
>> - `Vector form`:
>>
>> $$
\begin{aligned}
\mu \mathbf{J} & =\nabla \times \mathbf{H} \\
\mu \mathbf{H} & =\nabla \times \mathbf{E}+\frac{\partial \mathbf{D}}{\partial t} \\
\mathbf{D} & =\nabla \times \mathbf{B}-\frac{\partial \mathbf{H}}{\partial t}
\end{aligned}
$$
>>
>><p align="right">-- Oliver Heaviside , 1885/88</p>
> 
>> - `Tensor form`:
>>
>> $$
\begin{aligned}
\mu J_{i} & =\epsilon_{i j k} \frac{\partial H_{k}}{\partial x_{j}} \\
\mu H_{i} & =\epsilon_{i j k} \frac{\partial E_{k}}{\partial x_{j}}+\frac{\partial D_{i}}{\partial t} \\
D_{i} & =\epsilon_{i j k} \frac{\partial B_{k}}{\partial x_{j}}-\frac{\partial H_{i}}{\partial t}
\end{aligned}
$$
>>
>><p align="right"> -- Albert Einstein, The Field Equations of Gravitation (Where the great genius used the Einstein summation convention), 1915</p>

> *For the following , we only consider less or equal to three dimensions.*

1. [Notations and Premilinaries](/study/Imperial_mathematics/year_2/Multivariable_Calculus_and_Differential_Equations/Part_I_Vector_Calculus/1_Notations_and_premilinaries)

2. [Grad, Div, Curl and all That](/study/Imperial_mathematics/year_2/Multivariable_Calculus_and_Differential_Equations/Part_I_Vector_Calculus/2_Div_Grad_Curl_and_all_That)

3. [Integrations](/study/Imperial_mathematics/year_2/Multivariable_Calculus_and_Differential_Equations/Part_I_Vector_Calculus/3_Integrations)

4. [Integration Theorems](/study/Imperial_mathematics/year_2/Multivariable_Calculus_and_Differential_Equations/Part_I_Vector_Calculus/4_Integration_Theorems)
   



- 