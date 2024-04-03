---
title: 4. Bilinear and Quadratic Forms
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

> In this chapter, we shall define and study some analogues of inner products over any field $$\F$$. Since the positive of the inner product is not always make sense for any field, we will drop this condition.
> For the following, the $$\F$$ is any field.


### $$\blue{\textsf{Bilinear forms}}$$

#### $$\blue{\textsf{Definition (Bilinear form)}}$$

- $$V$$ is a vector space over $$\F$$.

- $$(\;,\;): V \times V \to \F$$ is a function.

    Then, $$(,)$$ is called a **bilinear form** if for all $$v_1, w, w_1, w_2 \in V$$ and $$\alpha, \beta \in \F$$,

    1. `Left linearity`: $$(\alpha v_1 + \beta v_2, w) = \alpha (v_1, w) + \beta (v_2, w)$$.

    2. `Right linearity`: $$(v, \alpha w_1 + \beta w_2) = \alpha (v, w_1) + \beta (v, w_2)$$.

#### $$\blue{\textsf{Definition (Symmetric and skew-symmetric)}}$$

- $$V$$ is a vector space over $$\F$$.

- $$(\;,\;): V \times V \to \F$$ is a bilinear form.

    Then,

    - `( , ) is symmetric:` if $$(v, u) = (u, v)$$ for all $$u, v \in V$$.

    - `( , ) is skew-symmetric:` if $$(v, u) = -(u, v)$$ for all $$u, v \in V$$.


#### $$\blue{\textsf{Theorem 4.1}}$$

- $$V$$ is a vector space over $$\F$$.

- $$(\;,\;): V \times V \to \F$$ is a bilinear form.

   Then, for all $$v, w \in V$$,

    $$
    [(v, w) = 0 \iff (w, v) = 0] \iff \textsf{ (,) is symmetric or skew-symmetric}
    $$

`Proof:`

#### $$\blue{\textsf{Definition (Non-degenerate bilinear form)}}$$

- $$V$$ is a vector space over $$\F$$.

- $$(\;,\;): V \times V \to \F$$ is a bilinear form.

    Then, $$(\;,\;)$$ is called **non-degenerate** if 

    $$
    V^\perp = \set{0}
    $$

    where $$V^\perp = \set{v \in V: (v, w) = 0 \text{ for all } w \in V}$$.

    In other words, for any $$u \in V$$, 

    $$
    (u, v) = 0 \; \forall v \in V \implies u = 0
    $$

#### $$\blue{\textsf{Proposition 4.2}}$$

- $$V$$ is a vector space over $$\F$$.

- $$(,): V \times V \to \F$$ is a **non-degenerate bilinear form**.

- $$W$$ is a subspace of $$V$$.

    Then, 

    $$
    \dim W^\perp = \dim V - \dim W
    $$

`Proof:`

#### $$\blue{\textsf{4.3 Matrix of a bilinear form}}$$

- $$V$$ is a vector space over $$\F$$.
  
- $$f = (\;,\;) : V \times V \to \F$$ is a bilinear form on $$V$$.

- $$B = \set{v_1, \dots, v_n}$$ is a basis of $$V$$.

    Then, the **matrix of $$f$$ with respect to $$B$$** is the $$n \times n$$ matrix $$f_B = A =(a_{ij})$$ where $$a_{ij} = (v_i, v_j)$$ for all $$i, j$$.

> **Remark:** 
>
> 1. $$B$$ is orthogonal basis $$\iff$$ $$f_B = I$$.
>
> 2. $$(\;, \;)$$ is symmetric or skew-symmetric $$\iff$$ $$f_B$$ is symmetric or skew-symmetric.
>
> 3. For any $$u, v \in V$$, $$(u,v) = [u]_B^T A [v]_B$$ (Proof on Problem Sheet 10)
>
> 4. $$(\;, \;)$$ is non-degenerate $$\iff$$ $$f_B$$ is invertible $$\iff$$ $$\det f_B \neq 0$$. (Proof on Problem Sheet 10)

#### $$\blue{\textsf{Proposition 4.4}}$$

- $$V$$ is a vector space over $$\F$$.

- $$f = (\;,\;) : V \times V \to \F$$ is a bilinear form on $$V$$.

- $$B_1, B_2$$ are two bases of $$V$$.

- $$P$$ is the change of basis matrix from $$B_1$$ to $$B_2$$.

    Then, 

    $$
    f_{B_2} = P^T f_{B_1} P
    $$

`Proof:`

#### $$\blue{\textsf{Definition (Congruent)}}$$

- $$A, B$$ are two $$n \times n$$ matrices over $$\F$$.

    Then, $$A$$ and $$B$$ are called **congruent** if there exists an invertible matrix $$P$$ such that 
    
    $$
    B = P^T A P
    $$

#### $$\blue{\textsf{Defintion (Equivalence of bilinear forms)}}$$

- $$f_1 = (\;, \;)_1, f_2 = (\;, \;)_2$$ are two bilinear forms on $$V$$.

- $$A, B$$ are the matrices of $$f_1, f_2$$ with respect to some basis $$B$$.

- $$A$$ and $$B$$ are congruent.

    Then, $$f_1$$ and $$f_2$$ are **equivalent**.

#### $$\blue{\mathsf{Definition\;(Characteristic\;of\;a\;field \F)}}$$

- $$\F$$ is a field.

    Then, the **characteristic of $$\F$$** is the **smallest positive integer $$n$$** such that $$n = 0$$ in $$\F$$ if such $$n$$ exists. Otherwise, the characteristic of $$\F$$ is $$0$$. We denote the characteristic of $$\F$$ by $$\operatorname{char}(\F)$$.

> **Remark:**
>
> - $$\operatorname{char}(\C) = 0$$.
>
> - $$\operatorname{char}(\R) = 0$$.
>
> - $$\operatorname{char}(\mathbb{F}_p) = p$$ for any prime $$p$$.


#### $$\blue{\textsf{Theorem 4.5}}$$

- $$V$$ is a finite-dimensional vector space over $$\F$$.

- $$\operatorname{char}(\F) \neq 2$$.

- $$f = (\;,\;) : V \times V \to \F$$ is a non-degenerate skew-symmetric bilinear form on $$V$$.

    Then, 

    1. `Dimension of V is even:` $$\dim V = 2n$$ for some $$n \in \N$$.

    2. `Existence of orthogonal basis:` There exists a basis $$B = \set{e_1, f_1, \dots, e_m, f_m}$$ such that the matrix $$f_B$$ is the **block diagonal matrix** with the form:

       $$
       J_m = \begin{pmatrix}
       0 & 1 \\
         -1 & 0
         \end{pmatrix} \oplus \dots \oplus \begin{pmatrix}
            0 & 1 \\
            -1 & 0
            \end{pmatrix}
         $$

        There are $$m$$ blocks in the matrix $$J_m$$. Therefore,

        $$
        (e_i, f_i) = - (f_i, e_i) = 1 \quad \forall i = 1, \dots, m
        $$

        and

        $$
        (e_i, e_j) = (f_i, f_j) = 0 \quad \forall i \neq j
        $$

`Proof:`

#### $$\blue{\textsf{Corollary 4.6}}$$

- $$A$$ is an invertible skew-symmetric $$n \times n$$ matrix over $$\F$$.

- $$\operatorname{char}(\F) \neq 2$$.

   Then,

   1. `Dimension of V is even:` $$n = 2m$$ for some $$m \in \N$$.

   2. `A is congruent to Jm:` There exists an invertible matrix $$P$$ such that 

      $$
      P^T A P = J_m = \begin{pmatrix}
      0 & 1 \\
        -1 & 0
        \end{pmatrix} \oplus \dots \oplus \begin{pmatrix}
           0 & 1 \\
           -1 & 0
           \end{pmatrix}
        $$

`Proof:`

> **Remark:**
>
> There is another version of Corollary 4.6 which is **for any non-degenerate skew-symmetric bilinear form $$f$$ on $$\F^n$$ is euqivalent to the form 
>
> $$
 (x, y) = x^T J_m y = (x_1y_1 - x_2y_2) + \dots + (x_{m-1}y_{m-1} - x_{m}y_{m})
$$

#### $$\blue{\textsf{Theorem 4.7}}$$

- $$V$$ is a finite-dimensional vector space over $$\F$$.

- $$\operatorname{char}(\F) \neq 2$$.

- $$f = (\;,\;) : V \times V \to \F$$ is a non-degenerate symmetric bilinear form on $$V$$.

    Then, 

    1. `Existence of the orthogonal basis:` There exists an orthogonal basis $$B = \set{v_1, v_2, \cdots, v_n}$$ of $$V$$ such that 

        $$
        (v_i, v_j) = 0 \quad \forall i \neq j
        $$
      
        and

        $$
        (v_i, v_i) = \lambda_i \neq 0 \quad \forall i \in \set{1, \dots, n}
        $$

    2. `The corresponding basis matrix is diagonal:` The matrix $$f_B$$ is diagonal with the form:

        $$
        f = \operatorname{diag}(\lambda_1, \dots, \lambda_n) =
        \begin{pmatrix}
        \lambda_1 & 0 & \dots & 0 \\
        0 & \lambda_2 & \dots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \dots & \lambda_n
        \end{pmatrix}
        $$

`Proof:`

#### $$\blue{\textsf{Corollary 4.8}}$$

- $$A$$ is an invertible symmetric $$n \times n$$ matrix over $$\F$$.

- $$\operatorname{char}(\F) \neq 2$$.

   Then, A is **congruent** to some diagonal matrix.

`Proof:`

### $$\blue{\textsf{Quadratic forms}}$$

#### $$\blue{\textsf{Definition (Quadratic form)}}$$

- $$V$$ is a vector space over $$\F$$.

- $$Q: V \mapsto \F$$ is a function.

    Then, The **quadric form** $$Q$$ is defined by

    $$
    Q(v) = (v, v) \quad \forall v \in V
    $$

    where $$(\;,\;)$$ is a **symmetric bilinear form** on $$V$$. If $$(\;,\;)$$ is non-degenerate, then $$Q$$ is called **non-degenerate**.

#### $$\blue{\textsf{Definition (Equivalence of quadratic forms)}}$$

- The vector space $$V = \F^n$$ over $$\F$$.

- $$Q, Q': V \mapsto \F$$ are two quadratic forms on $$V$$.

- $$Q(x) = x^TA x$$, where $$A = A^T$$ is an symmetric $$n \times n$$ matrix over $$\F$$. 

- $$y = (y_1, \dots, y_n)^T$$ is a vector in $$\F^n$$, where $$x = Py$$ for some $$n \times n$$ matrix. Then,

    If

    $$
    Q(x) = (Py)^T A (Py) = y^T (P^T A P) y = y^T B y = Q'(y)
    $$

    where $$B = P^T A P$$ is an symmetric $$n \times n$$ matrix over $$\F$$.

    Then, $$Q$$ and $$Q'$$ are called **equivalent**.

> **Remark:**
>
> The matrix $$A$$ and $$P^T A P$$ are called **congruent**.


#### $$\blue{\textsf{Proposition 4.9}}$$

- $$V = \F^n$$ is a vector space over $$\F$$.

- $$Q: V \mapsto \F$$ is any quadratic form on $$V$$.

   Then, $$Q$$ is equivalent to a quadratic form $$Q_D(x)$$ of the form

   $$
   Q_D(x) = \lambda_1 x_1^2 + \dots + \lambda_n x_n^2 \quad (\lambda_i \in \F)
   $$

#### $$\blue{\textsf{Theorem 4.10}}$$

- $$V = \F^n$$ is a vector space over $$\F$$.

- $$Q: V \mapsto \F$$ is a **non-degenerate quadratic form** on $$V$$.

   Then, 

    1. `F = C:`If $$\F = \C$$, then $$Q$$ is equivalent to the quadratic form $$Q_0(x)$$ of the form

        $$
        Q_0(x) = x_1^2 + \dots + x_n^2 = x^T I_n x
        $$

    2. `F = R:` If $$\F = \R$$, then there exists **unique** $$p, q \in \Z^+$$ such that 

        $$
        p + q = n
        $$

        and $$Q$$ is equivalent to the quadratic form $$Q_{pq}(x)$$ of the form

        $$
        Q_{pq}(x) = x_1^2 + \dots + x_p^2 - x_{p+1}^2 - \dots - x_{p+q}^2 = x^T I_{pq} x
        $$
            
        where $$I_{pq} = \begin{pmatrix}
        I_p & 0 \\
        0 & -I_q
        \end{pmatrix}$$.

     3. `F = Q:` If $$\F = \Q$$, then there exists **infinitely many inequivalent non-degenerate quadratic forms** on $$V$$.

`Proof:`

