---
title: 10. Primary Decomposition
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
$$\gdef\lcm{\operatorname{lcm}}$$

>  **Remark**:
>
> The aim to learn this chapter is to find a method for decomposing a vector space into a direct sum of $$T$$-invariant subspaces. Therefore, we could find a basis of $$V$$ consisting of $$T$$-invariant subspaces. This is the key to find the Jordan canonical form of a linear map.


#### $$\blue{\mathsf{Definition\;(Generalized \;\lambda_i-eigenspace)}}$$

- $$V$$ is a finite-dimensional vector space over $$\F$$.

- $$T: V \to V$$ is a linear map.

- $$\lambda_i$$ for $$i \in \set{1, \dots, k}$$ are distinct eigenvalues of $$T$$.

    Then, the **generalized $$\lambda_i$$-eigenspace** of $$T$$ is defined as

    $$
    V_{\lambda_{i}}=\ker\left(T-\lambda_{i} I\right)^{n_{i}}
    $$



#### $$\blue{\textsf{Proposition 10.1 (V is could be decomposed into the direct sum of generalized eigenspaces)}}$$

- $$V$$ is a finite-dimensional vector space over $$\F$$.

- $$T: V \to V$$ is a linear map.

- $$g_1(x), g_2(x) \in \F[x]$$ are coprime polynomials such that $$g_1(T)g_2(T) = 0$$.

- $$V_i = \ker(g_i(T))$$ for $$i \in \set{1,2}$$.


    Then, 

    1. `T-invariant`: $$T(V_i) \subseteq V_i$$ for $$i \in \set{1, 2}$$.

    2. `Decomposition`: $$V = V_1 \oplus V_2$$.

    3. `Minimal polynomial`: If $$m_T(x) = g_1(x)g_2(x)$$, then $$m_{T_{V_i}}(x) = g_i(x)$$ for $$i \in \set{1, 2}$$.

`Proof`:

1. `T-invariant`: 

    Suppose $$v \in V_i$$, then $$g_i(T)v = 0$$, hence

    $$
    g_i(T)[T(v)] \overset{Community}= T[g_i(T)(v)] = T(0) = 0
    $$

    Therefore, $$T(v) \in \ker(g_i(T)) = V_i$$.


2. `Decomposition`

    Suppose $$g_1(x), g(2)_x$$ are coprime polynomials such that $$g_1(T)g_2(T) = 0$$.


    - `V is the sum of the kernels`:
    
       Then, by the [Proposition 8.3](../Linear_Algebra_and_Numerical_Analysis/8_Polynomials.md#proposition-83-the-greatest-common-divisor-could-be-expressed-as-a-linear-combination-of-two-polynomials), there exists $$s_1(x), s_2(x) \in \F[x]$$ such that

       $$
       g_1(x)s_1(x) + g_2(x)s_2(x) = 1
       $$

       Then, substituting $$T$$ into the above equation, we have

       $$
       g_1(T)s_1(T) + g_2(T)s_2(T) = I_V
       $$

       Then, for any $$v \in V$$, we have

       $$
       v = I_V(v) = [g_1(T)s_1(T) + g_2(T)s_2(T)](v) = g_1(T)s_1(T)(v) + g_2(T)s_2(T)(v)
       $$

       We set $$v_1 = g_2(T)s_2(T)(v)$$ and $$v_2 = g_1(T)s_1(T)(v)$$, then $$v = v_1 +v_2$$. 

       Since $$g_1(T)g_2(T) = 0$$, then $$g_1(T)v_1 = 0$$ and $$g_2(T)v_2 = 0$$, hence $$v_1 \in \ker(g_1(T)) = V_1$$ and $$v_2 \in \ker(g_2(T)) = V_2$$. Hence,

       $$
       V = V_1 + V_2
       $$

    - `V is the direct sum of the kernels`:

       If $$v \in V_1 \cap V_2$$, then $$v = s_1(T)g_1(T)(v) + s_2(T)g_2(T)(v) = 0$$, hence $$V_1 \cap V_2 = \set{0}$$. Therefore, by [Proposition 4.1](../Linear_Algebra_and_Numerical_Analysis/4_Direct_Sum.md#proposition-41-direct-sum-of-subspaces), $$V = V_1 \oplus V_2$$.

3. `Minimal polynomial`:

    Let $$m_i(x) = m_{T_{V_i}}(x)$$ for $$i \in \set{1, 2}$$. As $$V_i = \ker(g_i(T))$$, we have $$g_i(T_{V_i}) = 0$$, therefore, $$m_i(x) \mid g_i(x)$$ by [Proposition 9.1](../Linear_Algebra_and_Numerical_Analysis/9_The_minimal_polymial_of_a_linear_map.md#1) Then, since $$g_1(x), g_2(x)$$ are coprime, we have $$m_1(x), m_2(x)$$ are coprime. Therefore, by Question on problem sheet 4,

    $$
    m_T(x) = \lcm(m_1(x), m_2(x)) = m_1(x)m_2(x)
    $$

    By the assumption of $$m_T(x) = g_1(x)g_2(x)$$, we have $$m_{T_{V_i}}(x) = g_i(x)$$ for $$i \in \set{1, 2}$$. $$\square$$

#### $$\blue{\textsf{Theorem 10.2 (Primary decomposition theorem)}}$$

- $$V$$ is a finite-dimensional vector space over $$\F$$.

- $$T: V \to V$$ is a linear map with minimal polynomial $$m_T(x)$$.
  
- The factorization of $$m_T(x)$$ into [irreducible polynomials](https://en.wikipedia.org/wiki/Irreducible_polynomial) in $$\F[x]$$ is

    $$
    m_{T}(x)=\prod_{i=1}^{k} f_{i}(x)^{n_{i}}
    $$

    where $$f_i(x)\; i \in \set{1, \dots, k}$$ are distinct irreducible polynomials in $$\F[x]$$ and $$n_i \in \N$$.

- For $$i \in \set{1, \dots, k}$$, we define

    $$
    V_{i}=\ker\left(f_{i}(T)^{n_{i}}\right)
    $$

    Then, $$V_i$$ has the following properties:

    1. `T-invariance`: $$T\left(V_{i}\right) \subseteq V_{i}$$ for all $$i \in\{1, \ldots, k\}$$.

    2. `Decomposition`: $$V = V_1 \oplus \dots \oplus V_k$$.

    3. `Existence of minimal polynomial for restriction`: Each restriction $$T_{V_i}: V_i \to V_i$$ has minimal polynomial $$f_i(x)^{n_i}$$.

`Proof`: (Prove by **induction** on $$k$$)

Assume $$T: V \to V$$ is a linear map with minimal polynomial $$m_T(x) = \prod_{i=1}^{k} f_{i}(x)^{n_{i}}$$ where $$f_i(x)\; i \in \set{1, \dots, k}$$ are distinct irreducible polynomials in $$\F[x]$$ and $$n_i \in \N$$.

- `Base case`: $$k = 1$$
 
   The approach to prove this is most the same [Proposition 10.1](#1) and it is trivial.

- `Induction step`: $$k \geq 2$$

    Assume the theorem is true for number of irreducible polynomials less than $$k$$.

    In [Proposition 10.1](#1), we take 

    $$
    g_1(x) = f_1(x)^{n_1} \text{ and } g_2(x) = \prod_{i=2}^{k} f_{i}(x)^{n_{i}}
    $$

    Then, by [Proposition 10.1](#1), since they are coprime polynomials, we have

    $$
    V = V_1 \oplus W
    $$

    where $$V_1 = \ker(f_1(T)^{n_1})$$ and $$W = \ker(\prod_{i=2}^{k} f_{i}(T)^{n_{i}})$$ and also,


    $$
    m_{T_{V_1}}(x) = f_1(x)^{n_1} \text{ and } m_{T_{W}}(x) = \prod_{i=2}^{k} f_{i}(x)^{n_{i}}
    $$

    Then, by the induction hypothesis to the restriction $$T_W: W \to W$$, we have

    $$
    W = V_2 \oplus \dots \oplus V_k
    $$

    where $$V_i = \ker(f_i(T_W)^{n_i})$$ for $$i \in \set{2, \dots, k}$$ and also, $$m_{T_{V_i}}(x) = f_i(x)^{n_i}$$ for $$i \in \set{2, \dots, k}$$. Since $$\ker (f_i(T)^{n_i})$$ is a subspace of $$\ker (\prod_{i=2}^{k} f_{i}(T)^{n_{i}}) = W$$, then we have

    $$
    \ker (f_i(T)^{n_i}) = \ker (f_i(T_W)^{n_i})
    $$

    Also, we have

    $$
    (T_W)_{V_i} = T_{V_i}
    $$

    Therefore, the conditions in the theorem are satisfied, which are

    - `Decomposition`: $$V =  V_1 \oplus W = V_1 \oplus V_2 \oplus \dots \oplus V_k$$.

    - `Every decomposition is a kernel of a power of a polynomial`: $$V_i = \ker(f_i(T)^{n_i})$$ for $$i \in \set{1, \dots, k}$$.

    - `Minimal polynomial`: $$m_{T_{V_i}}(x) = f_i(x)^{n_i}$$ for $$i \in \set{1, \dots, k}$$. 

    Then, by the inductive axiom, the theorem is true for $$k \in \N^+$$. $$\square$$

#### $$\blue{\mathsf{Corollary \;10.3 \;(T \;is \;diagnalizable \leftrightarrow m_T(x) \; is \; a \; product \; of \; distinct \; linear \; factors)}}$$

- $$V$$ is a finite-dimensional vector space over $$\F$$.

- $$T: V \to V$$ is a linear map with minimal polynomial $$m_T(x)$$.

    Then,

    $$
    T \text{ is diagonalizable } \iff m_{T}(x)=\prod_{i=1}^{k}\left(x-\lambda_{i}\right)
    $$

    where $$\lambda_i \in \F$$ are distinct eigenvalues of $$T$$.

`Proof`:

- `=>`: 

    Assume $$T$$ is diagonalizable and $$B$$ is a basis of $$V$$ consisting of eigenvectors of $$T$$. (Definition of diagonalizable)

    Let $$\set{\lambda_1, \dots, \lambda_k}$$ be the set of distinct eigenvalues of $$T$$ and let 

    $$
    f(x) = \prod_{i=1}^{k}\left(x-\lambda_{i}\right)
    $$

    Then, $$f(T) = \prod_{i=1}^{k}\left(T-\lambda_{i}I\right)$$ maps each basis vector of $$B$$ to $$0$$, hence 

    $$
    f(T) = 0
    $$

    then, by the [Proposition 9.1](../Linear_Algebra_and_Numerical_Analysis/9_The_minimal_polymial_of_a_linear_map.md#1)

    $$
    m_{T}(x) \mid f(x)
    $$

    Therefore, $$m_{T}(x)$$ is a product of distinct linear factors.

- `<=`:

    Assume $$m_T(x) = \prod_{i=1}^{k}\left(x-\lambda_{i}\right)$$ where $$\lambda_i \in \F$$ are distinct eigenvalues of $$T$$.

    Then, by the [Theorem 10.2](#3), we have

    $$
    V = V_1 \oplus \dots \oplus V_k
    $$

    where $$V_i = \ker(T - \lambda_i I) = E_{\lambda_i}$$, the $$\lambda_i$$-eigenspace of $$T$$.

    Then, by the [Proposition 4.2](../Linear_Algebra_and_Numerical_Analysis/4_Direct_Sum.md#proposition-42-direct-sum-of-subspaces), the union of the basis of $$V_i$$ for $$i \in \set{1, \dots, k}$$ is a basis of $$V$$ and it consists of eigenvectors of $$T$$. Therefore, $$T$$ is diagonalizable. $$\square$$

#### $$\blue{\textsf{Definition (Primary decomposition)}}$$

The direct sum decomposition of $$V$$ in the [primary decomposition theorem](#2) is called the **primary decomposition** of $$V$$ with respect to $$T$$.
