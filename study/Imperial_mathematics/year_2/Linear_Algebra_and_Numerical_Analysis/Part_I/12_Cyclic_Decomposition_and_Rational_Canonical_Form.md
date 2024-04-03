---
title: 12. Cyclic Decomposition and Rational Canonical Form
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

### Cyclic subspaces

> For the following definitions, let $$V$$ be a vector space over a field $$\F$$ with finite dimension  and $$T: V \to V$$ be a linear map.

#### Definition (Cyclic subspace)

- $$V$$ is a vector space over a field $$\F$$ with finite dimension.

- $$T: V \to V$$ is a linear map.

   If $$v \in V$$ and $$v \neq 0$$, then the **$$T$$-cyclic subspace of $$V$$ generated by $$v$$** is defined as follows:

    $$
    Z(v, T) = \set{f(T)(v): f(x) \in \F[x]} = \span\set{v, T(v), T^2(v), \ldots}
    $$

    where $$f(T)(v)$$ is the evaluation of $$f(T)$$ at $$v$$.

    If we extend the definition to $$n \times n$$ matrices over $$\F$$ and for **non-zero vector $$n \in \F^n$$**, then we have

    $$
    Z(n, A) = \span\set{A^i v: i > 0}
    $$

    where $$A^i v$$ is the evaluation of $$A^i$$ at $$v$$.

> **Remark**:
>
> - $$Z(v, T)$$ is a $$T$$-invariant subspace of $$V$$.
>
> - We write $$T_v$$ to denote the restriction of $$T$$ to $$Z(v, T)$$.

#### Definition ($$T$$-annihiator of $$v$$ and $$Z(v, T)$$)

- $$V$$ is a vector space over a field $$\F$$ with finite dimension.

- There is a non-zero vector $$v \in V$$.

    Then, there is a sequence of linear transformations,

    $$
    v , T(v), T^2(v), \ldots, T^k(v), \ldots
    $$

- $$T^k(v)$$ is the first vector that is in the span of the previous ones.

    We could express this as follows:

    $$
    T^k(v) = -a_0 v - a_1 T(v) - \cdots - a_{k-1} T^{k-1}(v)
    $$

    for some $$a_0, a_1, \ldots, a_{k-1} \in \F$$.

    Then, we define the **$$T$$-annihilator of $$v$$** as follows:

    $$
    m_v(x) = x^k + a_{k-1} x^{k-1} + \cdots + a_1 x + a_0 \in \F[x]
    $$

> **Remark**:   

#### Proposition （The propoties of $$Z(v, T)$$ and $$m_v(x)$$）

- $$V$$ is a vector space over a field $$\F$$ with finite dimension.

- $$T: V \to V$$ is a linear map.

- There is an non-zero vector $$v \in V$$

   Then, we could have an cyclic subspace $$Z(v, T)$$ and an annihilator $$m_v(x)$$ of $$v$$.

   The following statements are true:

   1. `Basis of cyclic subspace`: $$B = \set{v, T(v), \ldots, T^{k-1}(v)}$$ is a basis of $$Z(v, T)$$.

   2. `Companion matrix`: The companion matrix of $$m_v(x)$$ is $$[T_v]_B$$, i.e.
      
      $$
      C(m_v) = [T_v]_B = \begin{pmatrix}
        0 & 0 & \cdots & 0 & -a_0 \\
        1 & 0 & \cdots & 0 & -a_1 \\
        0 & 1 & \cdots & 0 & -a_2 \\
        \vdots & \vdots & \ddots & \vdots & \vdots \\
        0 & 0 & \cdots & 1 & -a_{k-1}
        \end{pmatrix}
        $$

    3. `Minimal polynomial`: $$m_v(x)$$ is the minimal polynomial of $$T_v$$. In other words, $$m_v(T_v) = 0$$.

`Proof`:

#### Theorem (Cyclic Decomposition Theorem)

- $$V$$ is a finite dimensional vector space over a field $$\F$$.

- $$T: V \to V$$ is a linear map.

- The minimal polynomial of $$T$$ is $$m_T(x) = f(x)^k$$, where $$f(x) \in \F[x]$$ is irreducible.
  
   Then, there exists vectors $$v_1, \ldots, v_r \in V$$ such that:

   $$
   V=Z\left(v_{1}, T\right) \oplus \cdots \oplus Z\left(v_{r}, T\right)
   $$

   where the following statements are true:

   1. `T-anihilator`: Each $$Z\left(v_{i}, T\right)$$ has $$T$$-annihilator $$f(x)^{k_{i}}$$ for $$1 \leq i \leq r$$, and $$k=k_{1} \geq k_{2} \geq \cdots \geq k_{r}$$.

   2. `Uniqueness`: The numbers $$r$$ and $$k_{1}, \ldots, k_{r}$$ are uniquely determined by $$T$$.

#### Corollary

- $$T$$ is defined in the Cyclic Decomposition Theorem.

  Then, there is a basis $$B$$ of $$V$$ such that

    $$
    [T]_{B}=C\left(f(x)^{k_{1}}\right) \oplus \cdots \oplus C\left(f(x)^{k_{r}}\right)=\left[\begin{array}{cccc}
    C\left(f_{1}\right) & 0 & \cdots & 0 \\
    0 & C\left(f_{2}\right) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & C\left(f_{r}\right)
    \end{array}\right]
    $$

    where $$k = k_1 \geq k_2 \geq \cdots \geq k_r$$,**uniquely determined by $$T$$** and $$f_1(x), \ldots, f_r(x)$$ are irreducible polynomials in $$\F[x]$$.

`Proof`:

#### Corollary

- $$A$$ is a $$n \times n$$ matrix over a field $$\F$$.

- $$m_A(x) = x^k$$

   Then, the matrix $$A$$ is similar to a matrix of the form

    $$
    A \sim C\left(x^{k_{1}}\right) \oplus \cdots \oplus C\left(x^{k_{r}}\right) = \left(\begin{array}{cccc}
    C\left(x^{k_{1}}\right) & 0 & \cdots & 0 \\
    0 & C\left(x^{k_{2}}\right) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & C\left(x^{k_{r}}\right)
    \end{array}\right)
    $$

    where $$k = k_1 \geq k_2 \geq \cdots \geq k_r$$, **uniquely determined by $$A$$**.

`Proof`:

### Raitonal canonical form

#### Theorem (Rational Canonical Form)

- $$V$$ is a finite dimensional vector space over a field $$\F$$.

- $$T: V \to V$$ is a linear map.

- The minimal polynomial $$m_T(x)$$ could be factorized as:

    $$
    m_{T}(x) = \prod_{i=1}^{t} f_{i}(x)^{k_{i}}
    $$

    where $$f_1(x), \ldots, f_t(x)$$ are **distinct irreducible polynomials** in $$\F[x]$$.

    Then, there is a basis $$B$$ of $$V$$ such that

    $$
    \begin{aligned}
   [T]_{B} = C\left(f_{1}(x)^{k_{11}}\right) \oplus \cdots \oplus C\left(f_{1}(x)^{k_{1 r_{1}}}\right) \oplus \cdots  \oplus C\left(f_{t}(x)^{k_{t 1}}\right) \oplus \cdots \oplus C\left(f_{t}(x)^{k_{t r}}\right)
   $$

   The numbers $$\set{r_1, \ldots, r_t}$$ and $$\set{k_{11}, \ldots, k_{1r_1}, \ldots, k_{t1}, \ldots, k_{tr_t}}$$ are uniquely determined by $$T$$.

`Proof`:

#### Corollary (Rational Canonical Form for matrices)

- $$A$$ is a $$n \times n$$ matrix over a field $$\F$$.

- The minimal polynomial $$m_A(x)$$ could be factorized as:

    $$
    m_{A}(x) = \prod_{i=1}^{t} f_{i}(x)^{k_{i}}
    $$

    where $$f_1(x), \ldots, f_t(x)$$ are **distinct irreducible polynomials** in $$\F[x]$$.

    Then,  $$A$$ is similar to a matrix of the form:

    $$
    \tag{1}
    A \sim  \left(\begin{array}{cccc}
    C\left(f_{1}\right) & 0 & \cdots & 0 \\
    0 & C\left(f_{1}\right) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & C\left(f_{1}\right) \\
    \hline
    0 & 0 & \cdots & 0 \\
    \hline
    C\left(f_{t}\right) & 0 & \cdots & 0 \\
    0 & C\left(f_{t}\right) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & C\left(f_{t}\right)
    \end{array}\right)
   $$

   The numbers $$\set{r_1, \ldots, r_t}$$ and $$\set{k_{11}, \ldots, k_{1r_1}, \ldots, k_{t1}, \ldots, k_{tr_t}}$$ are uniquely determined by $$A$$.

   The matrix in (1) is called the **Rational Canonical Form** of $$A$$.

`Proof`:

### The algorithm for finding the rational canonical form





  