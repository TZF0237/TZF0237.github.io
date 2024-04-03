---
title: 1. Dual Space
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\inner#1#2{\langle #1, #2 \rangle}$$
$$\gdef\norm#1{\left\| #1 \right\|}$$
$$\gdef\abs#1{\left| #1 \right|}$$
$$\gdef\set#1{\left\{ #1 \right\}}$$
$$\gdef\va{\mathbf{a}}$$
$$\gdef\vb{\mathbf{b}}$$
$$\gdef\vc{\mathbf{c}}$$
$$\gdef\deg{\operatorname{deg}}$$
$$\gdef\gcd{\operatorname{gcd}}$$
$$\gdef\di{\operatorname{dim}}$$
$$\gdef\rank{\operatorname{rank}}$$
$$\gdef\lcm{\operatorname{lcm}}$$
$$\gdef\max{\operatorname{max}}$$
$$\gdef\span{\operatorname{Span}}$$

> For the following definitions, we use $$\phi: V \to \F$$ to denote a linear functional on $$V$$.


### Dual spaces


#### Definiton (Linear functional)

- $$V$$ is a vector space over a field $$\F$$

    A **linear functional** on $$V$$ is a linear map 
    
    $$
    \phi: V \to \F
    $$
    
    where $$\F$$ is a field, such that 

    $$
    \phi\left(\alpha v_{1}+\beta v_{2}\right)=\alpha \phi\left(v_{1}\right)+\beta \phi\left(v_{2}\right) \quad \forall v_{i} \in V, \alpha, \beta \in F
    $$

#### Definition (Dual set)

- $$V$$ is a vector space over a field $$\F$$

    The **dual set** of $$V$$ is defined as follows:
    
    $$
    V^{*}=\{\phi \mid \phi: V \rightarrow F \text { a linear functional }\} .
    $$


#### Theorem (Dual set is a vector space)

- $$V$$ is a vector space over a field $$\F$$

- The dual set $$V^*$$ is a vector space over $$\F$$ with the following operations:
    
    $$
    \begin{aligned}
    (\phi_1 + \phi_2)(v) & = \phi_1(v) + \phi_2(v) \\
    (\lambda \phi)(v) & = \lambda \phi(v)
    \end{aligned}
    $$

    for some $$\lambda \in \F$$ and $$\phi, \phi_{1}, \phi_{2} \in V^{*}$$ and $$v \in V$$.

    Then, $$V^*$$ is a vector space over $$\F$$.

> For the following definitions, we use $$V^*$$ to denote the dual space of $$V$$.

### Dimension of dual space

> For the following, we will use Kronecker delta $$\delta_{ij}$$ defined as follows, which is a tensors notation:
>
> $$
> \delta_{i j}=\left\\{begin{array}{ll}
> 1 & \text { if } i=j \\
> 0 & \text { if } i \neq j
> \end{array}\right.
> $$

#### Proposition

- $$V$$ is a vector space over a field $$\F$$.

- $$\dim V = n$$.

- $$B = \set{v_1, \dots, v_n}$$ is a basis of $$V$$.

   For each $$i = 1, \dots, n$$, define $$\phi_i: V^* \to \F$$ as follows:

    $$
    \phi_{i}\left(v_{j}\right)=\delta_{i j} \quad \text{ for } 1 \leq  j \leq n
    $$

    Then, $$\set{\phi_1, \dots, \phi_n}$$ is a basis of $$V^*$$, called the **dual basis** of $$B$$. Hence,

    $$
    \dim V^{*}=\dim V=n
    $$

`Proof`:

### Annihilators

> For the following, we use $$V$$ is a finite-dimensional vector space over a field $$\F$$, and $$V^*$$ is the dual space of $$V$$.

#### Definition (Annihilator)

- $$X \subset V$$.

    Definie the **annihilator** $$X^0$$ of $$X$$ as follows:

    $$
    X^{0}=\{\phi \in V^{*} \mid \phi(x)=0 \quad \forall x \in X\}
    $$

#### Proposition

- $$W$$ is a subspace of $$V$$.

    Then,

    $$
    W^0 \di V - \di W
    $$

`Proof`:






