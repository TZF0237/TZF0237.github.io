---
title: 11. Jordan Canonical Form
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
$$\gdef\span{\operatorname{span}}$$
$$\gdef\ker{\operatorname{ker}}$$

### Jordan Canonical Form

#### Definition `(Jordan block)`

- $$\F$$ is a field.

- $$\lambda \in \F$$.

- $$n \in \N$$.
  
   Define the $$n \times n$$ matrix $$J_n(\lambda)$$ as follows:

   $$
   J_{n}(\lambda)=\left(\begin{array}{cccccc}
   \lambda & 1 & 0 & \ldots & 0 & 0 \\
   0 & \lambda & 1 & \ldots & 0 & 0 \\
   0 & 0 & \lambda & \ldots & 0 & 0 \\
   & & & \ldots & & \\
   0 & 0 & 0 & \ldots & \lambda & 1 \\
   0 & 0 & 0 & \ldots & 0 & \lambda
   \end{array}\right)
   $$

   such a matrix is called a **Jordan block** of size $$n$$ with eigenvalue $$\lambda$$.

#### Proposition 11.1 `(The basic properties of Jordan blocks)`

- $$J = J_n(\lambda)$$ is a Jordan block of size $$n$$ with eigenvalue $$\lambda$$.

   Then the following statements are true:

   1. `Characteristic polynomial and minimal polynomial are the same`:      
        
        $$
        \c_J(x) = m_J(x) = (x - \lambda)^n
        $$

   2. `Eigenvalue is the only eigenvalue`: $$\lambda$$ is the only eigenvalue of $$J$$: its algebraic multiplicity is $$n$$ and its geometric multiplicity is $$1$$.

   3. `Nullity and rank`: 
   
    - $$J - \lambda I = J_n(0)$$
   
    - $$(J - \lambda)^n = 0$$

    - $$\ker (J - \lambda I)^i = \span \set{e_1, \dots, e_i} $$ for $$i \in \set{1, \dots, n}$$ Therefore, 
  
    $$
    \dim \ker (J - \lambda I)^i = i \text{ for } i \in \set{1, \dots, n}
    $$
    
    and 
    
    $$
    \rank (J - \lambda I)^i = n - i$$ \text{ for } i \in \set{1, \dots, n}
    $$

    1. `The dimension will be reduced by i after applying the linear map corresponding to the Jordan block for i times`: The linear map $$(J - \lambda I)^i$$ will reduce the dimension of the vector space by $$i$$ by sending the basis vectors:
   
    $$
    \begin{aligned}
    (J-\lambda I)^{i} e_{n} &=e_{n-i} \\
    (J-\lambda I)^{i} e_{n-1} &=e_{n-i-1} \\
    & \vdots \\
    (J-\lambda I)^{i} e_{n-i+1} &=e_{1} \\
    (J-\lambda I)^{i} e_{n-i} &=0
    \end{aligned}
    $$

    where $$e_i$$ is the $$i$$-th standard basis vector and $$i \in \set{1, \dots, n}$$.

`Proof`:

1. `The characteristic polynomial and minimal polynomial are the same`:
   
   Since $$J$$ is upper triangular, the characteristic polynomial 

    $$
    c_J(x) = \det (J - xI) = \prod_{i = 1}^n (J_{ii} - x) = (x - \lambda)^n
    $$

    Hence, the minimal polynomial must dive $$c_J(x)$$, which means it is factor of $$(x - \lambda)^n$$.

    $$
    m_J(x) = (x - \lambda)^i
    $$

    for some $$i \leq n$$. 

    Since $$(J - \lambda I)^{n-1} \neq 0, (J - \lambda I)^n = 0$$, we have $$i = n$$. Hence,

    $$
    m_J(x) = (x - \lambda)^n
    $$

2. `The geometric multiplicity of $$\lambda$$ is $$1$$`:

    Since $$m_J(x) = (x - \lambda)^n$$, the geometric multiplicity of $$\lambda$$ is at least $$1$$.

    Since $$(J - \lambda I)^{n-1} \neq 0, (J - \lambda I)^n = 0$$, we have $$i = n$$. Hence,

    $$
    m_J(x) = (x - \lambda)^n
    $$

    which means the geometric multiplicity of $$\lambda$$ is at most $$1$$.

    Therefore, the geometric multiplicity of $$\lambda$$ is $$1$$.


> **Remark**:


#### Proposition 11.2 (The properties of Jordan blocks)

- $$A$$ is a **block diagonal matrix** of the form

   $$
   A=\left(\begin{array}{cccc}
   A_{1} & 0 & \cdots & 0 \\
    0 & A_{2} & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & A_{k}
    \end{array}\right)
    $$

    which is $$n \times n$$ where $$n = \sum_{i = 1}^k n_i$$ and $$A_i$$ is a $$n_i \times n_i$$ matrix for $$i \in \set{1, \dots, k}$$.
    
- Each $$A_i$$ have characteristic polynomial $$c_i(x)$$ and minimal polynomial $$m_i(x)$$.

   Then, the following statements are true:

   1. `Characteristic polynomial are the product of the characteristic polynomials of the blocks`: 
   
   $$
   c_A(x) = \prod_{i = 1}^k c_i(x)
   $$

   2. `Minimal polynomial are the least common multiple of the minimal polynomials of the blocks`:

    $$
    m_A(x) = \lcm(m_1(x), \dots, m_k(x))
    $$

    3. `The dimension of the eigenspace is the sum of the dimensions of the eigenspaces of the blocks`:

       For any eigenvalue $$\lambda$$ of $$A$$,

    $$
    \dim E_{A}(\lambda)=\sum_{i=1}^{k} \dim E_{A_{i}}(\lambda)
    $$


    4. `The polynomial of could be decomposed into the product of the polynomials of the blocks`:

    For any $$q(x) \in \F[x]$$,

    $$
    q(A)=q\left(A_{1}\right) \oplus \cdots \oplus q\left(A_{k}\right)
    $$

#### Theorem 11.3 `(Jordan Canonical Form)`  

- $$A$$ is a $$n \times n$$ matrix over $$\F$$.

- The characteristic polynomial of $$A$$ is a product of linear factors in $$\F[x]$$:

   $$
   c_A(x) = \prod_{i = 1}^k (x - \lambda_i)^{n_i}
   $$

   where $$\lambda_i \in \F$$ are distinct eigenvalues of $$A$$ and $$n_i \in \N$$.

   Then, the following statements are true:

   1. `Similarity`: $$A$$ is similar to a matrix $$J$$ which is a block diagonal matrix of the form $$J=J_{n_{1}}\left(\lambda_{1}\right) \oplus J_{n_{2}}\left(\lambda_{2}\right) \oplus \cdots \oplus J_{n_{k}}\left(\lambda_{k}\right)$$, i.e. :

    $$
    \tag{1}
    A \sim  \left(\begin{array}{cccc}
    J_{n_{1}}\left(\lambda_{1}\right) & 0 & \cdots & 0 \\
    0 & J_{n_{2}}\left(\lambda_{2}\right) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & J_{n_{k}}\left(\lambda_{k}\right)
    \end{array}\right)
    $$

    2. `Uniqueness`: The matrix $$J$$ in (1) is unique detemined by $$A$$, apart from changing the order of the Jordan blocks appearing in $$J$$.

#### Definition `(Jordan canonical form)`

The block-diagonal matrix $$J$$ in (1) is called the **Jordan Canonical Form (JCF)** of $$A$$.

### The Algorithm of Computing the Jordan Canonical Form

#### Proposition 11.4 `(The relation of Algebraic multiplicity and Geometric multiplicity)`

- $$A$$ is a $$n \times n$$ matrix over $$\F$$.

- $$J$$ is the Jordan Canonical Form of $$A$$ with $$\lambda$$ as the corresponding eigenvalue of $$J$$.

   Then, the following statements are true:

   1. `Algebraic multiplicity`: 

        $$
        n_1 + \cdots + n_k = a_{\lambda}
        $$

        where $$a_{\lambda}$$ is the algebraic multiplicity of $$\lambda$$ and $$n_i$$ is the size of the Jordan block corresponding to $$\lambda_i$$.

    2. `Geometric multiplicity`: $$a$$ is the number of $$\lambda$$-Jordan blocks in $$J$$, then

        $$
        a = g(\lambda)
        $$

        where $$g_{\lambda}$$ is the geometric multiplicity of $$\lambda$$.

    3. `Divisibility`:

        $$
        \max \set{n_1, \dots, n_a} = r
        $$

        where $$(x - \lambda)^r$$ is the highest power of $$(x - \lambda)$$ dividing $$m_A(x)$$, which is the **minimal polynomial of $$A$$**.

### Uniquness of the Jordan Canonical Form

#### Theorem 11.5 `(Uniqueness of the Jordan Canonical Form)`

- $$A$$ is a $$n \times n$$ matrix over $$\F$$.

- $$A$$ is similar to a Jordan Canonical Form $$J = J_{n_1}(\lambda_1) \oplus \cdots \oplus J_{n_k}(\lambda_k)$$.

    Then, $$J$$ is **uniquely determined by $$A$$**, apart from changing the order of the Jordan blocks appearing in $$J$$.

`Proof`:

### Existence of the Jordan Canonical Form

#### Theorem 11.6 `(Existence of the Jordan Canonical Form)`

- $$T: V \to V$$ is a linear map.

- $$c_T(x)$$ is the product of linear factors in $$\F[x]$$.

    Then, there exists a basis $$B$$ of $$V$$ such that $$[T]_B$$ is a Jordan Canonical Form.

`Proof`:

### If there is no repeated eigenvalues

> For the following, we only talk about the case where there is only one eigenvalue $$\lambda$$ for a linear map $$T: V \to V$$, i.e.
>
> $$
> \di V = n \text { and } \c_{T}(x)=(x-\lambda)^{n}
> $$
>
> It means that $$T$$ has only one eigenvalue $$\lambda$$.

#### Definition `(Nilpotent)`

- $$T: V \to V$$ is a linear map.

- $$\lambda$$ is the only eigenvalue of $$T$$.

- $$S = T - \lambda I$$.

    Then, $$S$$ has only $$0$$ as its eigenvalue. We call $$S$$ a **nilpotent** linear map.

#### Theorem 11.7 `(The existence of a basis for a nilpotent linear map)`

- $$S: V \to V$$ is a **nilpotent linear map**.

  Then, there exists a basis $$B$$ of $$V$$ such that:

    $$
    [S]_{B}= J_{n_1}(0) \oplus \cdots \oplus J_{n_k}(0) = \begin{pmatrix}
    J_{n_1}(0) & 0 & \cdots & 0 \\
    0 & J_{n_2}(0) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & J_{n_k}(0)
    \end{pmatrix}
    $$

`Proof`:

### Corollary 11.8 `(The existence of a basis for a linear map)`

- $$S: V \to V$$ is a **nilpotent linear map**.

- $$T = S + \lambda I_V$$.

    Then, there exists a basis $$B$$ of $$V$$ such that:

    $$
    [T]_{B}= J_{n_1}(\lambda) \oplus \cdots \oplus J_{n_k}(\lambda) = \begin{pmatrix}
    J_{n_1}(\lambda) & 0 & \cdots & 0 \\
    0 & J_{n_2}(\lambda) & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & J_{n_k}(\lambda)
    \end{pmatrix}
    $$  

> **Remark**:
> 
> In other words, the **Jordan Canonical Form** exists for any linear map $$T: V \to V$$.


#### Definition `(A basis of a vector space mod subspace)`

- $$V$$ is a vector space over $$\F$$.

- $$U$$ is a subspace of $$V$$.

    Then, a basis $$B$$ of $$V$$ is called a **basis of $$V$$ mod $$W$$** if 

    $$
    U + v_1 , \dots, U + v_s
    $$

    is a basis for the **quotient space** $$V / U$$.








   