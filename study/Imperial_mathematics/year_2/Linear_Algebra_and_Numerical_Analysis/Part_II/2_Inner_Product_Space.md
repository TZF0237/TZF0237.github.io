---
title: 2. Inner Product Space
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

#### Definition `(Inner product)`

- $$\F = \R$$ or $$\C$$

- $$V$$ is a vector space over $$\F$$.

   An **inner product** on $$V$$ is a map

   $$
   V \times V \rightarrow \F
   $$

   denoted by $$(u, v) \in \F$$ for any $$u, v \in V$$, such that

    1. `Linearity in the first argument`

       $$
       (\lambda_1 v_1 + \lambda_2 v_2, w) = \lambda_1 (v_1, w) + \lambda_2 (v_2, w) \quad \forall v_i, w \in V, \lambda_i \in \F
       $$

    2. `Conjugate symmetry`

       $$
       (w, v) = \overline{(v, w)} \quad \forall v, w \in V
       $$

    3. `Positive-definiteness`

       $$
       (v, v) > 0 \text{ if } v \neq 0
       $$

    We call such a vector space $$V$$ with an inner product an **inner product space** ( real or complex ).

### Matrix of an inner product

#### Definition `(Hermitian matrix)`

- $$V$$ is a finite-dimensional inner product space over $$\C$$.

- $$B = \set{v_1, \dots, v_n}$$ is a basis of $$V$$.

- $$a_{ij} = (v_i, v_j)$$ for $$i, j = 1, \dots, n$$.

    Then $$A = (a_{ij})$$ is called the **matrix of the inner product** with respect to the basis $$B$$.
    
    $$A$$ is called a **Hermitian matrix**.

> **Remark**:


#### Definition `(Positive-definite matrix)`

- $$A$$ is a Hermitian matrix.
- $$\F = \R$$ or $$\C$$.

    Then, $$A$$ is called **positive-definite** if $$x^T  A \overline{x}^T > 0$$ for all $$x \in \F^n$$ with $$x \neq 0$$.

### Geometry of inner product spaces

> For the following, we assume $$V$$ is a inner product space over $$\F$$, where $$\F = \R$$ or $$\C$$. For $$u, v \in V$$, we define:
>
> - `The length:` $$\norm{u} = \sqrt{(u, u)}$$
>
> - `The distance:` $$d(u, v) = \norm{u - v}$$
>
> - `Unit vector:` $$u$$ is a unit vector if $$\norm{u} = 1$$

#### Proposition `(Some inequalities in inner product spaces)`

- $$u, v, w \in V$$

1. `Cauchy-Schwarz inequality`

   $$
   \abs{(u, v)} \leq \norm{u} \norm{v}
   $$

2. `Triangle inequality (Additivity)`

   $$
   \norm{u + v} \leq \norm{u} + \norm{v}
   $$

3. `Triangle inequality (Subtractivity)`

   $$
   \norm{u - v} \leq \norm{u - w} + \norm{w - v}

`Proof`:

### Orthogonality in inner product spaces

#### Definition `(Orthogonal)`

- $$u, v \in V$$

    We say $$u$$ and $$v$$ are **orthogonal** if $$(u, v) = 0$$.

#### Definition `(Orthonormal set)`

- $$\set{v_1, \dots, v_n}$$ is a set of vectors in $$V$$.

- `Orthogonal`: $$(v_i, v_j) = 0$$ for all $$i \neq j$$.

- $$(v_i, v_i) = 1$$ for all $$i \in \set{1, \dots, n}$$.

    Then, $$\set{v_1, \dots, v_n}$$ is called an **orthonormal set**.

#### Theorem

- $$V$$ is a finite-dimensional inner product space over $$\F$$. 

   Then, the following statements are true:

   1. `Existence of orthonormal basis`: $$V$$ has an orthonormal basis.

   2. `Any orthonormal could be extended to an orthonormal basis`: If $$B = \set{v_1, \dots, v_k}$$ is an orthonormal set in $$V$$, then $$B$$ can be extended to an orthonormal basis of $$V$$.

`Proof`:

#### Definition `(Orthogonal complement)`

- $$W \subseteq V$$ is a subspace of $$V$$.

    Then, the **orthogonal complement** of $$W$$ is defined by

    $$
    W^\perp = \set{v \in V \mid (v, w) = 0 \quad \forall w \in W}
    $$

#### Proposition `(The inner product is the direct sum of a subspace and its orthogonal complement)`

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$W \subseteq V$$ is a subspace of $$V$$.

    Then, $$V = W \oplus W^\perp$$.

`Proof`:

### Some applications of orthogonal bases

#### 1. `Fourier Coefficients`

If we have an orthonormal basis $$\set{v_1, \dots, v_n}$$ of $$V$$, then the Fourier coefficients of any vector $$v \in V$$ are the coefficients in its expression as a linear combination of the basis vectors. It could be computed by the following proposition.

#### Proposition `(Fourier coefficients)`

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$\set{u_1, \dots, u_n}$$ is an orthonormal basis of $$V$$.

- $$v \in V$$.

    Then, there are the following formulas:

    1. `Fourier coefficients`

       $$
       v = \sum_{i = 1}^n \lambda_i u_i \quad \text{where } \lambda_i = (v, u_i) \quad (\text{the Fourier coefficients of } v)
       $$

    2. `Parseval's identity`
    
       $$
       \norm{v}^2 = \sum_{i = 1}^n \abs{\lambda_i}^2
       $$

`Proof`:

#### 2. `Projections`

#### Definition `(Orthogonal projection mapping)`

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$W \subseteq V$$ is a subspace of $$V$$.

- Since $$V = W \oplus W^\perp$$, for any $$v \in V$$, there is a unique decomposition

   $$
   v = w + w' \quad \text{where } w \in W, w' \in W^\perp
   $$

   The **orthogonal projection mapping along $$W$$** is defined by $$\pi_W: V \rightarrow W$$ by

   $$
   \pi_W(v) = w
   $$

#### Proposition `(Orthogonal projection mapping)`

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$W \subseteq V$$ is a subspace of $$V$$.

- $$\pi_W$$ is the orthogonal projection mapping along $$W$$.

    Then, for any $$v \in V$$, we have

    1. `The projection is the closest vector`:
       
       For any $$v \in V$$, $$\pi_W(v)$$ is the closest vector to $$v$$ in $$W$$. In other words, the distance $$\norm{v - w}$$ is minimal for $$w = \pi_W(v)$$.

    2. `Distance formula`: 
    
       If $$\operatorname{dist}(v, W)$$ denotes the shortest distance from $$v$$ to any vector in $$W$$, then

       $$
       \operatorname{dist}(v, W) = \norm{v - \pi_W(v)}
       $$

    3. `Orthogonal projection formula`: 

        If $$\set{v_1, \dots, v_n}$$ is an orthonormal basis of $$W$$, then

        $$
        \pi_W(v) = \sum_{i = 1}^n (v, v_i) v_i
        $$

`Proof`:

#### 3. `Dual space`

> For the following, we assume $$V$$ is a finite-dimensional inner product space over $$\F$$, where $$\F = \R$$ or $$\C$$. Let $$f_v: V \to \F$$ defined by 
> 
> $$
  f_v(w) = (w, v)
  $$
>
> for any $$w \in V$$. Then, $$f_v$$ is a linear functional on $$V$$. Therefore, $$f_v \in V^*$$.


#### Proposition `(Dual space is the set of every linear functional constructed by the inner product)

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$f_v$$ is defined as above.

    Then,

    $$
    V^*  = \set{f_v \mid v \in V}
    $$

    and

    $$
    f_v = f_v' \implies v = v'
    $$

`Proof`:

#### Change of orthonormal basis

#### Proposition `(Change of orthonormal basis)`

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$E = \set{e_1, \dots, e_n}$$ and $$F = \set{f_1, \dots, f_n}$$ are orthonormal bases of $$V$$.

- $$P = (p_{ij})$$ is the matrix of the change of basis from $$E$$ to $$F$$.

   So, for $$1 \leq i \leq n$$, we have

   $$
   f_i = \sum_{j = 1}^n p_{ji} e_j
   $$
    
   Then,

   $$
   P^T \overline{P} = I
    $$

    where $$\overline{P}$$ is the matrix $$(\overline{p}_{ij})$$.

`Proof`:

#### Definition `(orthogonal matrix)`

- $$P$$ is a $$n \times n$$ square matrix.

- $$P^T \overline{P} = I$$

    Then, $$P$$ is called an **orthogonal matrix**.

#### Definition `(Unitary matrix)`

- $$P$$ is a $$n \times n$$ square matrix.

- $$P^T \overline{P} = I$$

    Then, $$P$$ is called a **unitary matrix**.


