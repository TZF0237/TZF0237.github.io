---
title: 3. Integrations
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
$$\gdef\vff{\mathbf{F}}$$

> For the following, we assume that all the functions are continuous and $$F$$ is a vector field and every domain $$D$$ is an open subset of $$\R^n$$.

### $$\blue{\textsf{3.1 Path Integrals}}$$

#### $$\blue{\textsf{Definition 3.1.1 (Path Integrals)}}$$

- A curve $$\gamma$$ joining $$A$$ to $$B$$. **(Not necessarily in the plane or smooth)**.

- A partition $$P$$ of $$\gamma$$ into $$N$$ sections: $$P = \{AP_1, P_1P_2, \dots, P_{N-1}P_N, P_{N-1}B\}$$.

- Let $$AP_1 = \delta s_1, P_1P_2 = \delta s_2, \dots, P_{N-1}P_N = \delta s_N, P_{N-1}B = \delta s_{N}$$.

- A function is defined along this curve $$\gamma$$ by $$f_n = f(P_n)$$.

  The **path integral** of $$f$$ along $$\gamma$$ is defined as:

  $$
  \int_{\gamma} f d s= \lim_{N \to \infty,\: \max(\delta s_i) \to 0} \sum_{i=1}^{N} f(P_i) \delta s_i
  $$

> **Remark:** 
>
> The function $$f$$ could be a **scalar field** or a **vector field**.

#### $$\blue{\textsf{Definition 3.1.2 (Path Integral of a vector field)}}$$

- A curve $$\gamma$$ joining $$P$$ to $$Q$$. (Not necessarily in the plane or smooth)

- $$\delta s$$ reperesent the very small displacement along the curve $$\gamma$$.

- $$\delta \mathbf{r} = \vec{PQ}$$

- The **tangent vector** $$\widehat{\mathbf{t}}=\frac{d \mathbf{r}}{d s}=\lim _{\delta s \rightarrow 0} \frac{\delta \mathbf{r}}{\delta s}$$

- The **path element** $$d \mathbf{r}=\widehat{\mathbf{t}} d s$$

- $$\vff$$ is a vector field defined along $$\gamma$$.

   The **path integral** of $$\vff$$ along $$\gamma$$ is defined as:

   $$
   \int_{\gamma} \mathbf{F} \cdot d \mathbf{r} = \int_{\gamma} \mathbf({F} \cdot \widehat{\mathbf{t}}) d s
   $$

> **Remark:**
>
> In Catesian coordinates, 
>
> $$
  dr = dx \nvi + dy \nvj + dz \nvk
$$


#### $$\blue{\textsf{Definition 3.1.3 (Conservative Vector Field)}}$$

- $$\vff: D \to \R^n$$ is a vector field defined on a domain $$D$$.
 
   Then, we say $$\vff$$ is a **conservative vector field** on $$D$$ if and only if **there exists a continous scalar field $$\phi: D \to \R$$ such that** 
   
    $$
    \vff = \nabla \phi
    $$

#### $$\blue{\textsf{Definition 3.1.4 (Potential Function)}}$$

The scalar field $$\phi: D \to \R$$ is called a **potential function** for $$\vff$$ if $$\vff = \nabla \phi$$.

#### $$\blue{\textsf{Definition 3.1.5 (Circulation Integral)}}$$

- $$\vff: D \to \R^n$$ is a vector field defined on a domain $$D$$.

- $$\gamma$$ is a closed curve in $$D$$.

   Then, the **circulation integral** of $$\vff$$ around the closed curve $$\gamma$$ is defined as:

    $$
    \oint_{\gamma} \mathbf{F} \cdot d \mathbf{r}
    $$

#### $$\blue{\mathsf{Theorem 3.1.6 (Conservative\;Vector\;Field \iff Path\;Independence)}}$$

- $$\vff: D \to \R^n$$ is **continous** and **conservative** on $$D$$.

   Then, if and only if one of the following properties hols:

    1. `Path Independence I`: There is a scalar field $$\phi: D \to \R$$ such that for any $$A \in D$$ and $$B \in D$$ and any pash $$\gamma$$ joining $$A$$ to $$B$$, we have

    $$
    \int_{\gamma} \mathbf{F} \cdot d \mathbf{r} = \phi(B) - \phi(A)
    $$

    2. `Path Independence II`: For any curve $$C_1$$ and $$C_2$$ in $$D$$ drawn from $$A$$ to $$P$$, we have

    $$
    \int_{C_1} \mathbf{F} \cdot d \mathbf{r} = \int_{C_2} \mathbf{F} \cdot d \mathbf{r}
    $$

    3. `Ciculation integral is zero`: For any closed curve $$\gamma$$ in $$D$$, we have

    $$
    \oint_{\gamma} \mathbf{F} \cdot d \mathbf{r} = 0
    $$
     
`Proof:`

- `Path Independence I:` Consider we have a conservative vector field $$\vff = \nabla \phi$$ with $$\phi$$ is differentiable on $$D$$.

   Let $$A \in D$$ and $$B \in D$$ and any pash $$\gamma$$ joining $$A$$ to $$B$$.

   Then, we have

   $$
   \begin{aligned}
   \int_{\gamma} \mathbf{F} \cdot d \mathbf{r} &= \int_{\gamma} \nabla \phi \cdot d \mathbf{r} \\
   &= \int_{\gamma} \nabla \phi \cdot \widehat{\mathbf{t}} d s \\
    &= \int_{\gamma} \frac{\partial \phi}{\partial x_i} \widehat{e_i} \cdot \frac{d \mathbf{r}}{d s} d s \\
    & = \int_{\gamma} \frac{\partial \phi}{\partial x_i}\widehat{e_j} \cdot \frac{d x_i}{d s} \widehat{e_j} ds\\
    &= \int_{\gamma} \frac{\partial \phi}{\partial x_i} \frac{d x_i}{d s} d s\;(\widehat{e_i} \cdot \widehat{e_j} = \delta_{ij}) \\
    &= \int_{\gamma} \frac{d \phi}{d s} d s \; (\text{Chain Rule}) \\
    &= [\phi]_B^A \\
    &= \phi(B) - \phi(A)
   \end{aligned}
   $$

- `Path Independence II:` Immediate from `Path Independence I`.

- `Ciculation integral is zero:` Immediate from `Path Independence I`.

`Check for the converse:` (In Cartesian coordinates)

To prove the following, we rewrite the **Fundamental Theorem of Calculus** if we change $$x$$ as $$\delta x$$:

$$
\text{If } g(\delta x) = \int_x^{x + \delta x} f(x) dx \text{, then } g'(\delta x) = f(\delta x)
$$

Let $$\vff = F_1 \nvi + F_2 \nvj + F_3 \nvk$$ be a vector field defined on $$D$$ and $$\vff$$ is continous on $$D$$. Besides, assume the path independence I holds.

Then, we have

$$
\int_{C_1} \vff \cdot d \mathbf{r} = \int_{C_2} \vff \cdot d \mathbf{r} 
$$

Where $$C_1$$ and $$C_2$$ are two curves in $$D$$ drawn from $$A$$ to $$P$$. Suppose that $$A$$ is fixed and $$P$$ is variable, let $$P = (x, y, z)$$.

Then, we have

$$
\int_{C_1} \vff \cdot d \mathbf{r}  = G(P) = G(x, y, z)
$$

We could choose a point and path from $$P$$ such that only one of the coordinates is changing. For example, we could choose a path from $$P$$ to $$Q$$ such that only $$x$$ is changing.i.e. $$G = (x + \delta x, y, z)$$. In which case, $$d\mathbf{r} = \nvi dx$$. Thus,

$$
G(x + \delta x, y, z) - G(x, y, z) = \int_x^{x + \delta x} F_1 dx
$$

Hence,

$$
\begin{aligned}
\frac{\partial G}{\partial x} & = \lim_{\delta x \to 0} \frac{G(x + \delta x, y, z) - G(x, y, z)}{\delta x}\\
& = \lim_{\delta x \to 0} \frac{\int_x^{x + \delta x} F_1 dx}{\delta x}\quad (\text{L'Hospital's Rule})\\
& = \lim_{\delta x \to 0} F_1(x + \delta x, y, z)\\
& = F_1(x, y, z)
\end{aligned}
$$

Similarly, we could prove that

$$
\frac{\partial G}{\partial y} = F_2(x, y, z) \text{ and } \frac{\partial G}{\partial z} = F_3(x, y, z)
$$

Thus, if $$\vff$$ is continous on $$D$$ and the path independence I holds, then there must exist a scalar field $$G$$ such that

$$
\vff = \nabla G
$$

Hence, $\vff$ is conservative. $$\square$$


> **Remark:**
> 
> From the previous chapter, the curl of a gradient is always zero. Thus, if $$\vff$$ is conservative, then $$\cu \vff = 0$$. However, the converse is not true. After we learn **connectedness** and **simply connectedness**, we will see that if $$\cu \vff = 0$$ and $$D$$ is **simply connected** and $$\cu \vff = 0$$, then $$\vff$$ is conservative.

#### $$\blue{\textsf{3.1.7 Practical evaluation of path integrals}}$$

Suppose we would like to evaluate the path integral of a vector field $$\vff$$ along a curve $$\gamma$$:

$$
I = \int_{\gamma} \vff \cdot d \mathbf{r}
$$

where $$\vff$$ is a known function of $$(x, y, z)$$ and $$\gamma$$ is a known curve joining the points $$A(x_0, y_0, z_0)$$ and $$B(x_1, y_1, z_1)$$.

If along $$\gamma$$, we have 

$$
x = x(t), y = y(t), z = z(t) \text{ for } t_0 \leq t \leq t_1
$$

Here $$t$$ is a parameter along $$\gamma$$ with $$x(t_0) = x_0, x(t_1) = x_1$$, similarly for $$y$$ and $$z$$. Then, we can write

$$
d \mathbf{r} = \frac{d \mathbf{r}}{d t} d t = \left(\frac{d x}{d t} \nvi + \frac{d y}{d t} \nvj + \frac{d z}{d t} \nvk \right) d t
$$

Hence, with $$\vff = F_1(t) \nvi + F_2(t) \nvj + F_3(t) \nvk$$, we have

$$
\begin{aligned}
I &= \int_{\gamma} \vff \cdot d \mathbf{r} \\
&= \int_{t_0}^{t_1} \left(F_1(t) \frac{d x}{d t} + F_2(t) \frac{d y}{d t} + F_3(t) \frac{d z}{d t} \right) d t
\end{aligned}
$$




### $$\blue{\textsf{3.2 Surface Integrals}}$$

#### $$\blue{\textsf{Definition 3.2.1 (Surface Integrals)}}$$

- A surface $$S$$ in $$\R^n$$.

- A partition $$P$$ of $$S$$ into $$N$$ sections: $$P = \{\delta S_1, \delta S_2, \dots, \delta S_N\}$$.

- A function is defined on this surface $$S$$ by $$f_n = f(P_n)$$.

   The **surface integral** of $$f$$ over $$S$$ is defined as:

   $$
   \int_{S} f d S= \lim_{N \to \infty,\: \max(\delta S_i) \to 0} \sum_{i=1}^{N} f(P_i) \delta S_i
   $$

   for $$i \in \{1, 2, \dots, N\}$$.

> **Remark:**
>
> The function $$f$$ could be a **scalar field** or a **vector field**. But for the following of surface integrals, we will only consider **scalar fields**.

#### $$\blue{\textsf{3.2.2 Type of surfaces}}$$

- $$\blue{\textsf{Closed surface:}}$$ A surface $$S$$ is called a **closed surface** if it **divides $$\R^3$$ into two non-connected regions, an interior region and an exterior region**.

- $$\blue{\textsf{Convex surface:}}$$ A surface $$S$$ is called a **convex surface** if it is **crossed by a straight line in at most two points**.

- $$\blue{\textsf{Open surface:}}$$ A surface $$S$$ is called a **open surface** if it has **rim which can be represented by a closed curve (A closed surface can be thought of as the sum of two open surfaces)**.

#### $$\blue{\textsf{3.2.3 Evaluation of surface integrals for plane surfaces in x-y plane}}$$

- `An areal element:` $$d S$$

- `A unit vector normal to the surface:` $$\nn$$

- `A vector areal element:` $$d \mathbf{S} = \nn d S$$

   -  `In Cartesian coordinates:`
      
       The areal element $$d S = d x d y$$ and the unit vector normal to the surface is $$\nn = \nve_z$$. Assume there is a surface $$S$$ on the $$x-y$$ plane.

        - `Vertical strips:` The equations of the upper and lower boundaries are given as:

            $$
            y = \begin{cases}
            F_1(x)\quad \textsf{Upper boundary}\\
            F_2(x)\quad \textsf{Lower boundary}
            \end{cases}
            $$

            If $$f(x, y)$$ is any function defined on $$S$$, then the surface integral of $$f$$ over $$S$$ is given by

            $$
            \int_{S} f(x, y) d S = \int_{x_1}^{x_2} \left\{\int_{F_2(x)}^{F_1(x)} f(x, y)d y \right\} d x 
            $$

        - `Horizontal strips:` The equations of the left and right boundaries are given as:

            $$
            x = \begin{cases}
            G_1(y)\quad \textsf{Right boundary}\\
            G_2(y)\quad \textsf{Left boundary}
            \end{cases}
            $$

            If $$f(x, y)$$ is any function defined on $$S$$, then the surface integral of $$f$$ over $$S$$ is given by

            $$
            \int_{S} f(x, y) d S = \int_{y_1}^{y_2} \left\{\int_{G_2(y)}^{G_1(y)} f(x, y)d x \right\} d y
            $$

### $$\blue{\textsf{3.3 Volume Integrals}}$$

#### $$\blue{\textsf{Definition 3.3.1 (Volume Integrals)}}$$

- A region $$\tau$$ in $$\R^n$$.

- A partition $$P$$ of $$\tau$$ into $$N$$ sections: $$P = \{\delta \tau_1, \delta \tau_2, \dots, \delta \tau_N\}$$.

- A function is defined on this region $$\tau$$ by $$f_n = f(P_n)$$.

   The **volume integral** of $$f$$ over $$\tau$$ is defined as:

   $$
   \int_{\tau} f d \tau= \lim_{N \to \infty,\: \max(\delta \tau_i) \to 0} \sum_{i=1}^{N} f(P_i) \delta \tau_i
   $$

   for $$i \in \{1, 2, \dots, N\}$$.

> **Remark:**
>
> The function $$f$$ could be a **scalar field** or a **vector field**. 


#### $$\blue{\textsf{3.3.2 Volume element in Cartesian coordinates}}$$

In Cartesian coordinates, the volume element is given by

$$
d \tau = d x d y d z
$$
     

   






