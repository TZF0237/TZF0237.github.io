---
title: 2. Grad, Div, Curl and all That
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\abs#1{\left| #1 \right|}$$
$$\gdef\pap#1{\frac{\partial \phi }{\partial #1}}$$
$$\gdef\va{\mathbf{a}}$$
$$\gdef\vb{\mathbf{b}}$$
$$\gdef\vc{\mathbf{c}}$$
$$\gdef\ve{\varepsilon}$$
$$\gdef\nvi{\widehat{\mathbf{i}}}$$
$$\gdef\nvj{\widehat{\mathbf{j}}}$$
$$\gdef\nvk{\widehat{\mathbf{k}}}$$
$$\gdef\nve{\widehat{\mathbf{e}}}$$
$$\gdef\ns{\widehat{\mathbf{s}}}$$
$$\gdef\nn{\widehat{\mathbf{n}}}$$
$$\gdef\d{\operatorname{div}}$$
$$\gdef\cu{\operatorname{curl}}$$
$$\gdef\g{\nabla}$$
$$\gdef\vf{\mathbf{A}}$$

> For the following, we assume $$\phi$$ is a scalar field and $$\vf$$ is a vector field.

### $$\textcolor{orange}{\textsf{2.1 Gradient}}$$

#### $$\textcolor{orange}{\textsf{Definition ((Level surfaces set))}}$$

- $$\phi = c$$ defines a **level surface** of $$\phi$$, where $$c$$ is a constant.

- If we vary $$c$$, we get a collection of level surfaces.

The collection of level surfaces of $$\phi$$ is called the **level surfaces set** of $$\phi$$ or the **equipotential surfaces** of $$\phi$$.

#### $$\textcolor{orange}{\textsf{Definition (Directional derivative)}}$$

- A specific point $$P$$ such that $$\phi = \phi(P)$$/

- $$Q$$ is a neighbouring point of $$P$$.

- The equation of the level surface through $$Q$$ is $$\phi = \phi(Q)$$.

- The normal line to $$\phi = \phi(P)$$ at $$P$$ and the normal line intersects the level surface $$\phi = \phi(Q)$$ at $$N$$

- Since $$N$$ is on the surface level, $$\phi(N) = \phi(P)$$.

- $$s$$ is the length along the normal line along $$PQ$$

- $$n$$ is the length along the normal line from $$PN$$.

- The unit vector $$\ns$$ and $$\nn$$ are the unit vectors along the normal line from $$PQ$$ and $$PN$$ respectively.

The **directional derivative** of $$\phi$$ at $$P$$ is a **scalar** that maps a point $$P$$ to a scalar $$\frac{\partial \phi}{\partial s}$$, which is defined as:

$$
\begin{aligned}
\frac{\partial \phi}{\partial s} & = \lim_{PQ \to 0} \frac{\phi(Q) - \phi(P)}{|PQ|}\\
& = \lim_{Q \to P} \frac{\phi(N) - \phi(P)}{|PN|}\cdot \frac{|PN|}{|PQ|}\\
& = \lim_{N \to P} \frac{\phi(N) - \phi(P)}{|PN|}\cdot \lim_{Q \to P}\frac{|PN|}{|PQ|}\\
& = \frac{\partial \phi}{\partial n} \cdot \lim_{Q \to P}\frac{|PN|}{|PQ|}\\
& = \frac{\partial \phi}{\partial n} \cdot \cos \theta \quad \text{where } \theta \text{ is the angle between } PN \text{ and } PQ\\
& = \frac{\partial \phi}{\partial n} \cdot (\widehat{\mathbf{n}} \cdot \widehat{\mathbf{s}}) \\
\end{aligned}
$$

That is,

$$
\tag{2.1.1}
\frac{\partial \phi}{\partial s} = \frac{\partial \phi}{\partial n} \cdot (\widehat{\mathbf{n}} \cdot \widehat{\mathbf{s}}) = \left(\frac{\partial \phi}{\partial n}\widehat{\mathbf{n}} \right)\cdot \widehat{\mathbf{s}}
$$

> **Remark**:
> 
> - The physical meaning of the directional derivative of a scalar field at $$P$$ is the rate of change of $$\phi$$ at $$P$$ in the direction $$\widehat{\mathbf{s}}$$.
>
> - Since $$\cos \theta \leq 1$$, the maximum direction derivative is at $$P$$ occurs when $$\theta = 0$$, i.e. $$\widehat{\mathbf{n}} = \widehat{\mathbf{s}}$$, meaning that the maximum directional derivative is in the direction of the normal line.

#### $$\textcolor{orange}{\textsf{Definition (Gradient)}}$$

The **gradient** is the direction that $$\phi$$ changes most rapidly, which is the direction of the normal line and It is a **vector field**. which maps a point $$P$$ to a vector $$\nabla \phi(P)$$. The gradient is defined as:

$$
\nabla \phi = \frac{\partial \phi}{\partial n}\widehat{\mathbf{n}}
$$

> **Remark**:
>
> - The physical meaning of the gradient at $$P$$ is the direction of the maximum directional derivative of $$\phi$$ at $$P$$.
> - The operator $$\nabla$$ is called the **gradient operator** and it is a vector operator, it is defined as:
> 
>   $$
    \nabla = \pap{x}\widehat{\mathbf{i}} + \pap{y}\widehat{\mathbf{j}} + \pap{z}\widehat{\mathbf{k}}
    $$
>
>   The gradient is perpendicular to the level surface of $$\phi$$.
>
> - Use gradient to find the direction derivative of $$\phi$$ in the direction $$\widehat{\mathbf{s}}$$:
>
>   $$
\frac{\partial \phi}{\partial s} = \nabla \phi \cdot \widehat{\mathbf{s}}
 $$

#### $$\textcolor{orange}{\textsf{Theorem (Gradient in Cartesian coordinates)}}$$

- $$\phi = \phi(x, y, z)$$ is a scalar field.

- $$\nvi, \nvj, \nvk$$ are the unit vectors in the $$x, y, z$$ directions respectively.

$$
\nabla \phi =  \pap{x}\widehat{\mathbf{i}} + \pap{y}\widehat{\mathbf{j}} + \pap{z}\widehat{\mathbf{k}}
$$

`Proof`:

If $$\g \phi = A_1 \nvi + A_2 \nvj + A_3 \nvk$$, then

$$
\begin{aligned}
\nvi \cdot \g \phi & = A_1 \\
\nvj \cdot \g \phi & = A_2 \\
\nvk \cdot \g \phi & = A_3 \\
\end{aligned}
$$

By definition,

$$
\begin{aligned}
\nvi \cdot \g \phi & = \frac{\partial \phi}{\partial x} \\
\nvj \cdot \g \phi & = \frac{\partial \phi}{\partial y} \\
\nvk \cdot \g \phi & = \frac{\partial \phi}{\partial z}
\end{aligned}
$$

Hence,

$$
\g \phi = \pap{x}\widehat{\mathbf{i}} + \pap{y}\widehat{\mathbf{j}} + \pap{z}\widehat{\mathbf{k}} \quad \square
$$

#### $$\textcolor{orange}{\textsf{Theorem (Gradient in cylindrical coordinates)}}$$

- $$\phi = \phi(r, \theta, z)$$ is a scalar field defined in cylindrical coordinates.

- $$\widehat{\mathbf{r}}, \widehat{\boldsymbol{\theta}}, \widehat{\mathbf{z}}$$ are the unit vectors in the $$r, \theta, z$$ directions respectively.

$$
\nabla \phi=\widehat{\mathbf{r}} \frac{\partial \phi}{\partial r}+\frac{\widehat{\boldsymbol{\theta}}}{r} \frac{\partial \phi}{\partial \theta}+\widehat{\mathbf{k}} \frac{\partial \phi}{\partial z}
$$ 


`Proof`:

Before we prove this, we need to know the following:

$$
\begin{aligned}
\widehat{\mathbf{r}} & = \cos \theta \widehat{\mathbf{i}} + \sin \theta \widehat{\mathbf{j}} \\
\widehat{\boldsymbol{\theta}} & = -\sin \theta \widehat{\mathbf{i}} + \cos \theta \widehat{\mathbf{j}} \\
\widehat{\mathbf{k}} & = \widehat{\mathbf{k}} \\
\end{aligned}
$$

We write $$\g \phi = A_1 \widehat{\mathbf{r}} + A_2 \widehat{\boldsymbol{\theta}} + A_3 \widehat{\mathbf{z}}$$, then

$$
\begin{aligned}
A_{1} & =\widehat{\mathbf{r}} \cdot \nabla \phi \\
& = \widehat{\mathbf{r}} \left(\pap{x} \widehat{\mathbf{i}} + \pap{y} \widehat{\mathbf{j}} + \pap{z} \widehat{\mathbf{k}}\right) \\
& = \cos \theta \pap{x} + \sin \theta \pap{y}\quad(\widehat{r} \cdot \widehat{k} = 0) \\
& = \frac{\partial x}{\partial r} \frac{\partial \phi}{\partial x}+\frac{\partial y}{\partial r} \frac{\partial \phi}{\partial y} \\
& = \frac{\partial \phi}{\partial r} \\
\end{aligned}
$$

**Notice that it is not twice, since it is distributed to the two components.**

$$
\begin{aligned}
A_{2} & =\widehat{\theta} \cdot \nabla \phi \\
& = \widehat{\theta} \left(\pap{x} \widehat{\mathbf{i}} + \pap{y} \widehat{\mathbf{j}} + \pap{z} \widehat{\mathbf{k}}\right) \\
& = -\sin \theta \pap{x} + \cos \theta \pap{y}\quad(\widehat{\theta} \cdot \widehat{k} = 0) \\
& = \frac{1}{r}\frac{\partial x}{\partial \theta} \frac{\partial \phi}{\partial x}+\frac{1}{r}\frac{\partial y}{\partial \theta} \frac{\partial \phi}{\partial y} \\
& = \frac{1}{r}\frac{\partial \phi}{\partial \theta} \\
\end{aligned}
$$

$$
A_3 = \widehat{\mathbf{k}} \cdot \nabla \phi = \pap{z}
$$

Hence,

$$
\nabla \phi=\widehat{\mathbf{r}} \frac{\partial \phi}{\partial r}+\frac{\widehat{\boldsymbol{\theta}}}{r} \frac{\partial \phi}{\partial \theta}+\widehat{\mathbf{k}} \frac{\partial \phi}{\partial z} \quad \square
$$

#### $$\textcolor{orange}{\textsf{Theorem (Gradient in spherical coordinates)}}$$

- $$\phi = \phi(r, \theta, \alpha)$$ is a scalar field defined in spherical coordinates.

- $$\widehat{\mathbf{r}}, \widehat{\boldsymbol{\theta}}, \widehat{\boldsymbol{\alpha}}$$ are the unit vectors in the $$r, \theta, \alpha$$ directions respectively.

$$
\nabla \phi =  \pap{r}\widehat{\mathbf{r}} + \frac{1}{r}\pap{\theta} + \frac{1}{r \sin \theta}\pap{\alpha}
$$

`Proof`:

Before we prove this, we need to know the following:

$$
\begin{aligned}
\widehat{\mathbf{r}} & = \sin \theta \cos \alpha \widehat{\mathbf{i}} + \sin \theta \sin \alpha \widehat{\mathbf{j}} + \cos \theta \widehat{\mathbf{k}} \\
\widehat{\boldsymbol{\theta}} & = \cos \theta \cos \alpha \widehat{\mathbf{i}} + \cos \theta \sin \alpha \widehat{\mathbf{j}} - \sin \theta \widehat{\mathbf{k}} \\
\widehat{\boldsymbol{\alpha}} & = -\sin \alpha \widehat{\mathbf{i}} + \cos \alpha \widehat{\mathbf{j}} 
\end{aligned}
$$

We write $$\g \phi = A_1 \widehat{\mathbf{r}} + A_2 \widehat{\boldsymbol{\theta}} + A_3 \widehat{\boldsymbol{\alpha}}$$, then

$$
\begin{aligned}
A_{1} & =\widehat{\mathbf{r}} \cdot \nabla \phi \\
& = \widehat{\mathbf{r}} \left(\pap{x} \widehat{\mathbf{i}} + \pap{y} \widehat{\mathbf{j}} + \pap{z} \widehat{\mathbf{k}}\right) \\
& = \sin \theta \cos \alpha \pap{x} + \sin \theta \sin \alpha \pap{y} + \cos \theta \pap{z} \\
& = \frac{\partial x}{\partial r} \frac{\partial \phi}{\partial x}+\frac{\partial y}{\partial r} \frac{\partial \phi}{\partial y} + \frac{\partial z}{\partial r} \frac{\partial \phi}{\partial z} \\
& = \frac{\partial \phi}{\partial r} \\
\end{aligned}
$$

**Notice that it is not triple, since it is distributed to the three components.**

$$
\begin{aligned}
A_{2} & =\widehat{\theta} \cdot \nabla \phi \\
& = \widehat{\theta} \left(\pap{x} \widehat{\mathbf{i}} + \pap{y} \widehat{\mathbf{j}} + \pap{z} \widehat{\mathbf{k}}\right) \\
& = \cos \theta \cos \alpha \pap{x} + \cos \theta \sin \alpha \pap{y} \quad (\widehat{\theta} \cdot \widehat{k} = 0) \\
& = \frac{1}{r}\frac{\partial x}{\partial \theta} \frac{\partial \phi}{\partial x}+\frac{1}{r}\frac{\partial y}{\partial \theta} \frac{\partial \phi}{\partial y} \\
& = \frac{1}{r}\frac{\partial \phi}{\partial \theta} \\
\end{aligned}
$$

$$
\begin{aligned}
A_{3} & =\widehat{\alpha} \cdot \nabla \phi \\
& = \widehat{\alpha} \left(\pap{x} \widehat{\mathbf{i}} + \pap{y} \widehat{\mathbf{j}} + \pap{z} \widehat{\mathbf{k}}\right) \\
& = -\sin \alpha \pap{x} + \cos \alpha \pap{y} \quad (\widehat{\alpha} \cdot \widehat{k} = 0) \\
& = \frac{1}{r \sin \theta}\frac{\partial x}{\partial \alpha} \frac{\partial \phi}{\partial x}+\frac{1}{r \sin \theta}\frac{\partial y}{\partial \alpha} \frac{\partial \phi}{\partial y} \\
& = \frac{1}{r \sin \theta}\frac{\partial \phi}{\partial \alpha} \\
\end{aligned}
$$

Hence,

$$
\nabla \phi=\widehat{\mathbf{r}} \frac{\partial \phi}{\partial r}+\frac{\widehat{\theta}}{r} \frac{\partial \phi}{\partial \theta}+\frac{\widehat{\alpha}}{r \sin \theta} \frac{\partial \phi}{\partial \alpha}
$$  $$\square$$

#### $$\textcolor{orange}{\textsf{Extend the definition of gradient and directional derivative to vector fields}}$$

If we extend the definition of gradient to the vector field $$\vf$$, the gradient of a vector field will be a **matrix**, which is called the **Jacobian matrix**. We just take the gradient operator $$\nabla$$ as a $$n\times 1$$ matrix and the vector field $$\vf$$ as a $$n\times 1$$ matrix, then the gradient of a vector field is a $$n\times n$$ matrix.

$$
\begin{aligned}
\mathbf{J} = \nabla \vf & = \left(\pap{x_1}\widehat{\mathbf{e}}_1 + \pap{x_2}\widehat{\mathbf{e}}_2 + \cdots + \pap{x_n}\widehat{\mathbf{e}}_n\right) \vf \\
& = \left(\begin{array}{cccc}
\frac{\partial}{\partial x_{1}} & \frac{\partial}{\partial x_{2}} & \cdots & \frac{\partial}{\partial x_{n}}
\end{array}\right)\left(\begin{array}{c}
A_{1} \\
A_{2} \\
\vdots \\
A_{n}
\end{array}\right) \\
& = \left(\begin{array}{cccc}
\frac{\partial A_{1}}{\partial x_{1}} & \frac{\partial A_{1}}{\partial x_{2}} & \cdots & \frac{\partial A_{1}}{\partial x_{n}} \\
\frac{\partial A_{2}}{\partial x_{1}} & \frac{\partial A_{2}}{\partial x_{2}} & \cdots & \frac{\partial A_{2}}{\partial x_{n}} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial A_{n}}{\partial x_{1}} & \frac{\partial A_{n}}{\partial x_{2}} & \cdots & \frac{\partial A_{n}}{\partial x_{n}}
\end{array}\right)
\end{aligned}
$$

Then by the way of calculating the directional derivative of a scalar field, we can extend the definition of directional derivative to the vector field $$\vf$$, which is a **vector**. We just substitute dot product with matrix multiplication:

$$
\frac{\partial \vf}{\partial s} = \mathbf{J}  \widehat{\mathbf{s}}
$$

where $$\mathbf{J}$$ is the Jacobian matrix of $$\vf$$ and $$\widehat{\mathbf{s}}$$ is the unit vector in the direction $$\widehat{\mathbf{s}}$$.


#### $$\textcolor{orange}{\mathsf{Equation\;of\;a\;tangent\;plane\;to \;\phi = \phi(P)}}$$

- $$(\g \phi)_P$$ is the gradient at $$P$$ of $$\phi$$.

- $$\mathbf{r}$$ is the position vector.

- $$\mathbf{r}_P$$ is the position vector at $$P$$.

Since $$\g \phi$$ is normal to the level surface $$\phi = \phi(P)$$, the equation of the tangent plane to $$\phi = \phi(P)$$ at $$P$$ is:

$$
(\mathbf{r} - \mathbf{r}_P) \cdot (\g \phi)_P = 0
$$

In component form, it is:

$$
\left(\frac{\partial \phi}{\partial x}\right)_{P}\left(x-x_{P}\right)+\left(\frac{\partial \phi}{\partial y}\right)_{P}\left(y-y_{P}\right)+\left(\frac{\partial \phi}{\partial z}\right)_{P}\left(z-z_{P}\right)=0 
$$

where $$\left(\pap{x}\right)_P$$, $$\left(\pap{y}\right)_P$$ and $$\left(\pap{z}\right)_P$$ are the partial derivatives of $$\phi$$ at $$P$$ and are constants.

### $$\textcolor{orange}{\textsf{2.2 Divergence and Curl}}$$

#### $$\textcolor{orange}{\textsf{Definition (Divergence)}}$$

The **divergence** of a vector field $$\vf$$ is a **scalar field** that maps a point $$P$$ to a scalar $$\d \vf(P)$$. The divergence is defined as:

$$
\d \vf = \nabla \cdot \vf
$$

#### $$\textcolor{orange}{\textsf{Theorem (Divergence in Cartesian coordinates)}}$$

- $$\vf = A_1 \nvi + A_2 \nvj + A_3 \nvk$$ is a vector field.

- $$\nvi, \nvj, \nvk$$ are the unit vectors in the $$x, y, z$$ directions respectively.

$$
\d \vf = \pap{x}A_1 + \pap{y}A_2 + \pap{z}A_3
$$

`Proof`:

$$
\begin{aligned}
\operatorname{div} \mathbf{A} & = \left(\frac{\partial}{\partial x}\widehat{\mathbf{i}} + \frac{\partial}{\partial y}\widehat{\mathbf{j}} + \frac{\partial}{\partial z}\widehat{\mathbf{k}}\right) \cdot (A_1\widehat{\mathbf{i}} + A_2\widehat{\mathbf{j}} + A_3\widehat{\mathbf{k}}) \\
& = \frac{\partial A_1}{\partial x} + \frac{\partial A_2}{\partial y} + \frac{\partial A_3}{\partial z} \\
& = \sum_{i=1}^{3} \frac{ \partial A_i}{\partial x_i}
\end{aligned} \quad \square
$$

> **Remark**:
>
> - The definition of divergence is only adapted to a vector field $$\vf$$ since it is a vector operator that only could be applied to a vector.
>
> - The physical meaning of the divergence at $$P$$ is a measure of how much a vector field spreads out or converges at a given point $$P$$. When the flow is spreading out or converging, the divergence is positive, and when the flow is converging, the divergence is negative.
>
> - The divergence could only be defined in 3D space, since the gradient operator $$\nabla$$ is only defined in 3D space.
> 
> - The dot product in the definition of divergence $$\g \cdot \vf$$ is not commutative, i.e. $$\g \cdot \vf \neq \vf \cdot \g$$. Since the left hand side is a **scalar operator** and the right hand side is divergence of a vector field, which is a **scalar**.

#### $$\textcolor{orange}{\textsf{Definition (Curl)}}$$

The **curl** of a vector field $$\vf$$ is a **vector field** that maps a point $$P$$ to a vector $$\cu \vf(P)$$. The curl is defined as:

$$
\cu \vf = \nabla \times \vf
$$

#### $$\textcolor{orange}{\textsf{Theorem (Curl in Cartesian coordinates)}}$$

- $$\vf = A_1 \nvi + A_2 \nvj + A_3 \nvk$$ is a vector field.

- $$\nvi, \nvj, \nvk$$ are the unit vectors in the $$x, y, z$$ directions respectively.

$$
\cu \vf = \left(\pap{y}A_3 - \pap{z}A_2\right)\nvi + \left(\pap{z}A_1 - \pap{x}A_3\right)\nvj + \left(\pap{x}A_2 - \pap{y}A_1\right)\nvk
$$

`Proof`:
$$
\begin{aligned}
\operatorname{curl} \mathbf{A} & = \left|\begin{array}{ccc}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
A_{1} & A_{2} & A_{3}
\end{array}\right|\\
& = \left(\frac{\partial A_3}{\partial y} - \frac{\partial A_2}{\partial z}\right)\widehat{\mathbf{i}} + \left(\frac{\partial A_1}{\partial z} - \frac{\partial A_3}{\partial x}\right)\widehat{\mathbf{j}} + \left(\frac{\partial A_2}{\partial x} - \frac{\partial A_1}{\partial y}\right)\widehat{\mathbf{k}} \\
& = \sum_{i=1}^{3} \ve_{ijk} \frac{\partial A_k}{\partial x_j} \\
\end{aligned} \quad \square
$$

> **Remark**:
>
> - The definition of curl is only adapted to a vector field $$\vf$$, since it is a vector operator that only could be applied to a vector.
>
> - The physical meaning of the curl at $$P$$ is a measure of how much a vector field circulates or rotates about a given point $$P$$. When the flow is clockwise, the curl is positive, and when the flow is counterclockwise, the curl is negative.
>
> - The curl could only be defined in 3D space, since the gradient operator $$\nabla$$ is only defined in 3D space.
>
> - The cross product in the definition of curl $$\g \times \vf$$ is not commutative, i.e. $$\g \times \vf \neq \vf \times \g$$. Since the left hand side is a **vector operator** and the right hand side is curl of a vector field, which is a **vector**. 

> **Remark**:
>
> These simple form for $$\d$$ and $$\cu$$ are only adapted to Cartesian coordinates since $$\mathbf{i}, \mathbf{j}, \mathbf{k}$$ are constant vectors. **For other coordinates, we need to use the chain rule to derive the formula.**


### $$\textcolor{orange}{\textsf{2.3 Operations with the gradient operator}}$$

#### $$\textcolor{orange}{\textsf{Theorem (Some important sum and product formulas)}}$$

- $$\g, \d, \cu$$ are all **linear operators**, i.e. for any scalar $$\alpha$$ and vector fields $$\vf, \vg$$:

    $$
    \begin{aligned}
    & \text { (i) } \nabla\left(\phi_{1}+\phi_{2}\right) =\nabla \phi_{1}+\nabla \phi_{2}, \\
    & \text { (ii) } \operatorname{div}(\mathbf{A}+\mathbf{B}) =\operatorname{div} \mathbf{A}+\operatorname{div} \mathbf{B}, \\
    &\text { (iii) } \operatorname{curl}(\mathbf{A}+\mathbf{B}) =\operatorname{curl} \mathbf{A}+\operatorname{curl} \mathbf{B} .
    \end{aligned}
    $$

    The proof is trivial by the definition of the $$\nabla$$ operator.

- $$\g, \d, \cu$$ satisfy the **product rule**, i.e. for any scalar $$\phi, \psi$$ and vector fields $$\vf$$:

    $$
    \begin{aligned}
    & \mathrm{ (iv) } \nabla(\phi \psi) =\phi \nabla \psi+\psi \nabla \phi \\
    & \mathrm{ (v) } \operatorname{div}(\phi \mathbf{A}) =\phi \operatorname{div} \mathbf{A}+\nabla \phi \cdot \mathbf{A} .
    \end{aligned}
    $$

    **Proof of (v)**:

    $$
    \begin{aligned}
    \d(\phi \vf) & = \left(\nvi \frac{\partial}{\partial x} + \nvj \frac{\partial}{\partial y} + \nvk \frac{}{z}\right) \cdot \left(\phi A_1 \nvi +\phi A_2 \nvj + \phi A_3 \nvk\right) \\
    & = \frac{\partial \phi A_1}{\partial x} + \frac{\partial \phi A_2}{\partial y} + \frac{\partial \phi A_3}{\partial z} \\
    & = \phi \left(\frac{\partial A_1}{\partial x} + \frac{\partial A_2}{\partial y} + \frac{\partial A_3}{\partial z}\right) + A_1 \frac{\partial \phi}{\partial x} + A_2 \frac{\partial \phi}{\partial y} + A_3 \frac{\partial \phi}{\partial z} \\
    & = \phi \d \vf + \g \phi \cdot \vf \\
    \end{aligned}
    $$

#### $$\textcolor{orange}{\textsf{Use Einstein summation convention to simplify the notation}}$$

If we use the Einstein summation convention, we can simplify the notation of the gradient, divergence and curl and the proof of (v).

-  The gradient: [\g \phi]_i  = \frac{\partial \phi}{\partial x_i}

- The divergence: \d \vf  = \frac{\partial A_i}{\partial x_i}

- The curl: [\cu \vf]_i  = \ve_{ijk} \frac{\partial A_k}{\partial x_j}

    where $$[\:\;]_i$$ denotes the $$i$$ th component of the vector. 

    Therefore, the proof of (v) can be simplified as:

    $$
    \begin{aligned}
    \d (\phi \vf) & = \frac{\partial \phi A_i}{\partial x_i} \\
    & = \phi \frac{\partial A_i}{\partial x_i} + A_i \frac{\partial \phi}{\partial x_i} \\
    & = \phi \d \vf + (\vf \cdot \g) \phi \\
    \end{aligned}
    $$

#### $$\textcolor{orange}{\textsf{Some important identities}}$$

$$
\begin{aligned}
& \text { (vi) } \operatorname{curl}(\phi \mathbf{A})  =\phi \operatorname{curl} \mathbf{A}+\nabla \phi \times \mathbf{A}, \\
& \text { (vii) } \operatorname{div}(\mathbf{A} \times \mathbf{B}) =\mathbf{B} \cdot \operatorname{curl} \mathbf{A}-\mathbf{A} \cdot \operatorname{curl} \mathbf{B}, \\
& \text { (viii) } \operatorname{curl}(\mathbf{A} \times \mathbf{B})  =(\mathbf{B} \cdot \nabla) \mathbf{A}-\mathbf{B} \operatorname{div} \mathbf{A}-(\mathbf{A} \cdot \nabla) \mathbf{B}+\mathbf{A} \operatorname{div} \mathbf{B}, \\
& \text { (ix) } \nabla(\mathbf{A} \cdot \mathbf{B})  =(\mathbf{B} \cdot \nabla) \mathbf{A}+(\mathbf{A} \cdot \nabla) \mathbf{B}+\mathbf{B} \times \operatorname{curl} \mathbf{A}+\mathbf{A} \times \operatorname{curl} \mathbf{B} .
\end{aligned}
$$

> For the following, we assume that our vector and scalar fields are sufficiently smooth that we can interchange the order of differentiation.

#### $$\textcolor{orange}{\textsf{Definition (The divergence of a gradient: the Laplacian)}}$$

- $$\phi = \phi(x, y, z)$$ is a scalar field.

- $$\nvi, \nvj, \nvk$$ are the unit vectors in the $$x, y, z$$ directions respectively.

The operator $$\nabla^2$$ is called the **Laplacian** and it is a **scalar operator** that maps a point $$P$$ to a scalar $$\nabla^2 \phi(P)$$. It is defined as:

$$
\begin{aligned}
\nabla^{2} \phi & = \d(\g \phi) \\
& = \left(\frac{\partial}{\partial x} \nvi + \frac{\partial}{\partial y} \nvj + \frac{\partial}{\partial z} \nvk\right) \cdot \left(\frac{\partial \phi}{\partial x} \nvi + \frac{\partial \phi}{\partial y} \nvj + \frac{\partial \phi}{\partial z} \nvk\right) \\
& = \frac{\partial^{2} \phi}{\partial x^{2}}+\frac{\partial^{2} \phi}{\partial y^{2}}+\frac{\partial^{2} \phi}{\partial z^{2}} \\
& = \g^2 \phi \\
& = \frac{\partial^2 \phi}{\partial x_i \partial x_i}\\
& = \frac{\partial^2 \phi}{\partial x_i^2} 
\end{aligned}
$$

It is the sum of the second partial derivatives of $$\phi$$ with respect to each of the Cartesian coordinates, i.e.:

$$
\nabla^{2} \phi=\frac{\partial^{2} \phi}{\partial x^{2}}+\frac{\partial^{2} \phi}{\partial y^{2}}+\frac{\partial^{2} \phi}{\partial z^{2}}
$$

For a vector field $$\vf$$, we use the same definition above:

$$
\g^2 \vf = \frac{\partial^2 \vf}{\partial x^2} + \frac{\partial^2 \vf}{\partial y^2} + \frac{\partial^2 \vf}{\partial z^2} = \frac{\partial^2 \vf}{\partial x_i^2}
$$

> **Remark**:
> 
> - The definition of the Laplacian could be adpated to scalar and vector fields. **For a scalar field, the Laplacian is a scalar operator, and for a vector field, the Laplacian is a vector operator.**
>
> - The physical meaning of the Laplacian for a scalar field is a measure of **curvature** or **stress** of the field at a given point. It tells us how much the field differs from its average value at a given point. If the Laplacian is positive, the field is **concave** at that point, and if the Laplacian is negative, the field is **convex** at that point. If the Laplacian is zero, the field is **flat** at that point. Because it is the divergence of the gradient, it is a measure of how much the rate of change of the field differ from the kind of steady flow that would be expected at that point.
> 
> - The equation $$\nabla^2 \phi = 0$$ is called the **Laplace equation** and will be studied in detail in the module **Partial Differential Equations in Actions**.


#### $$\textcolor{orange}{\textsf{Theorem (The curl of a gradient is zero)}}$$

$$\phi = \phi(x, y, z)$$ is a scalar field, then the curl of the gradient of $$\phi$$ is zero:

$$
\cu(\g \phi) = 0
$$

`Proof`:

$$
\begin{aligned}
[\operatorname{curl}(\nabla \phi)]_i & = \ve_{ijk} \frac{\partial}{\partial x_j} (\g \phi)_k \\
& = \ve_{ijk} \frac{\partial}{\partial x_j} \frac{\partial \phi}{\partial x_k} \\
& = \frac{1}{2} \ve_{ijk} \frac{\partial}{\partial x_j} \frac{\partial \phi}{\partial x_k} + \frac{1}{2} \ve_{ikj} \frac{\partial}{\partial x_k} \frac{\partial \phi}{\partial x_j} \\
& = \frac{1}{2} \ve_{ijk} \frac{\partial}{\partial x_j} \frac{\partial \phi}{\partial x_k} - \frac{1}{2} \ve_{ijk} \frac{\partial}{\partial x_k} \frac{\partial \phi}{\partial x_j} \\
& = \frac{1}{2} \ve_{ijk} \left(\frac{\partial}{\partial x_j} \frac{\partial \phi}{\partial x_k} - \frac{\partial}{\partial x_j} \frac{\partial \phi}{\partial x_k}\right) \\
& = 0 \\
\end{aligned} \quad \square
$$

> **Remark**:
>
> The physical explanation of this theorem is that the curl of a gradient is zero because the curl measures a vector field circulates or rotates about a given point, and the gradient measures the direction of the maximum directional derivative of a scalar field at a given point. Since the gradient measures the direction of the maximum directional derivative of a scalar field at a given point, it has no net rotation around a point, and thus its curl is zero.

#### $$\textcolor{orange}{\textsf{Theorem (The divergence of the curl is zero)}}$$

$$\vf = \vf(x, y, z)$$ is a vector field, then the divergence of the curl of $$\vf$$ is zero:

$$
\d(\cu \vf) = 0
$$

$$
\begin{aligned}
\d = (\cu \vf) & = \frac{\partial }{\partial x_i}(\cu \vf)_i\\
& = \ve_{ijk} \frac{\partial}{\partial x_i} \frac{\partial A_k}{\partial x_j} \\
& = \ve_{ijk} \frac{\partial}{\partial x_i} \frac{\partial A_k}{\partial x_j} + \ve_{jik} \frac{\partial}{\partial x_j} \frac{\partial A_k}{\partial x_i} \\
& = \ve_{ijk} \frac{\partial}{\partial x_i} \frac{\partial A_k}{\partial x_j} - \ve_{ijk} \frac{\partial}{\partial x_i} \frac{\partial A_k}{\partial x_j} \\
& = 0 \\
\end{aligned} \quad \square
$$

> **Remark**:
>
> The physical explanation of this theorem is that the divergence of a curl is zero because the divergence measures the a vector field spreads out or converges at a given point and the curl measures a vector field circulates or rotates about a given point. Since for a vector field to have a net rotation around a point, it must have no net flow out or into a point, and thus its divergence is zero.

#### $$\textcolor{orange}{\textsf{(The curl of a curl is gradient of the divergence minus the Laplacian of the vector field)}}$$

$$\vf = \vf(x, y, z)$$ is a vector field, then the curl of the curl of $$\vf$$ is:

$$
\cu(\cu \vf) = \g(\d \vf) - \nabla^2 \vf
$$


`Proof`:

$$
\begin{aligned}
[\operatorname{curl}(\operatorname{curl} \mathbf{A})]_i & = \ve_{ijk} \frac{\partial}{\partial x_j} (\cu \vf)_k \\
& = \ve_{ijk} \frac{\partial}{\partial x_j}\left(\ve_{klm} \frac{\partial A_m}{\partial x_l}\right) \\
& = (\delta_{il} \delta_{jm} - \delta_{im}\delta_{jl}) (\frac{\partial}{\partial x_j} \frac{\partial A_j}{\partial x_l}) \\
& = \frac{\partial^2 A_j}{\partial x_j \partial x_i} - \frac{\partial^2 A_i}{\partial x_j \partial x_j} \\
& = \frac{\partial}{\partial x_i}\left(\frac{\partial \vf_j}{\partial x_j}\right) - \frac{\partial^2 A_i}{\partial x_j^2} \\
& = [\g(\d \vf)]_i - [\g^2 \vf]_i \\
\end{aligned} \quad \square
$$


> **Remark**:
>
> - The curl of a curl of a vector field is a **vector field** that maps a point $$P$$ to a vector $$\cu(\cu \vf)(P)$$ since the gradient of the divergence is a vector field that maps a point $$P$$ to a vector $$\g(\d \vf)(P)$$ and the Laplacian of the vector field is a vector field that maps a point $$P$$ to a vector $$\nabla^2 \vf(P)$$.
>
> - The physical meaning of the curl of a curl of a vector field is a measure of how much the rotations of the rotation of a vector space at a given point.

### $$\textcolor{orange}{\textsf{2.4 Irrotational and Solenoidal Vector Fields}}$$

#### $$\textcolor{orange}{\textsf{Definition (Irrotational vector field)}}$$

- $$\vf = \vf(x, y, z)$$ is a vector field.

- $$\c \vf$$ is the curl of $$\vf$$.

- $$\c \vf = 0$$.

Then $$\vf$$ is called an **irrotational vector field**.

> **Remark**:
>
>> - The physical meaning of an irrotational vector field is that it is a vector field that has no net rotation around a given point.
>
>> - Some examples of irrotational vector fields are:
>>
>>    - **Any gradient vector field is irrotational since the curl of a gradient is zero**.
>> 
>>    - The identity vector field $$\mathbf{r} = x \widehat{\mathbf{i}} + y \widehat{\mathbf{j}} + z \widehat{\mathbf{k}}$$ is irrotational since the curl of the identity vector field is zero.

#### $$\textcolor{orange}{\textsf{Definition (Solenoidal vector field)}}$$

- $$\vf = \vf(x, y, z)$$ is a vector field.

- $$\d \vf$$ is the divergence of $$\vf$$.

- $$\d \vf = 0$$.

Then $$\vf$$ is called a **solenoidal vector field**.

> **Remark**:
>
> - The physical meaning of a solenoidal vector field is that it is a vector field that has no net flow out or into a given point.
>
> - **An examples of solenoidal vector fields is the curl of any vector field is solenoidal since the divergence of the curl is zero.**
>
> - The divengence of the identity vector field $$\mathbf{r} = x \widehat{\mathbf{i}} + y \widehat{\mathbf{j}} + z \widehat{\mathbf{k}}$$ is $$3$$, which is the dimension of the vector field. Hence, the identity vector field is not solenoidal.

#### $$\textcolor{orange}{\textsf{Examples}}$$

Calculate

$$
\g^2 \left(\frac{1}{r}\right)
$$

**Solution**:

$$
\begin{aligned}
\g \left(\frac{1}{r}\right) & = \d (x^2 + y^2 + z^2)^{-1/2} \\
& = \left(\frac{\partial}{\partial x}\nvi + \frac{\partial}{\partial y}\nvj + \frac{\partial}{\partial z}\nvk\right) \cdot \left(\frac{1}{\left(x^{2}+y^{2}+z^{2}\right)^{1 / 2}}\right) \\
& = - (x \nvi + y \nvj + z \nvk) \frac{1}{\left(x^{2}+y^{2}+z^{2}\right)^{3 / 2}} \\
& = - \frac{\mathbf{r}}{r^3} \\
\end{aligned}
$$

$$
\begin{aligned}
\g^2 \left(\frac{1}{r}\right) & = - \left(\frac{\partial}{\partial x}\left(\frac{x}{(x^2+y^2+z^2)^{\frac{3}{2}}}\right) + \frac{\partial}{\partial y}\left(\frac{y}{(x^2+y^2+z^2)^{\frac{3}{2}}}\right) + \frac{\partial}{\partial z}\left(\frac{z}{(x^2+y^2+z^2)^{\frac{3}{2}}}\right)\right)  \\
& = -\frac{3}{(x^2 + y^2 z^2)^{\frac{3}{2}}} + \left(\frac{3x^2}{(x^2+y^2+z^2)^{\frac{5}{2}}} + \frac{3y^2}{(x^2+y^2+z^2)^{\frac{5}{2}}} + \frac{3z^2}{(x^2+y^2+z^2)^{\frac{5}{2}}}\right) \\
& = -\frac{3}{(x^2 + y^2 z^2)^{\frac{3}{2}}} + \frac{3}{(x^2+y^2+z^2)^{\frac{3}{2}}} \\
& = 0 \\
\end{aligned}
$$

Therefore, $$\g^2 (1/r) = 0$$, $$\frac{1}{r}$$ satisfies the **Laplace equation**: $$\g^2 \phi = 0$$.












