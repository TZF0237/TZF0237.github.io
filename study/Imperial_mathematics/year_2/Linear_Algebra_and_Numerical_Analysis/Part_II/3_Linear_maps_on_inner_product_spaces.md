---
title: 3. Linear maps on inner product spaces
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

> This chapter is to try to prove the **Spectral Theorem** for linear maps on inner product spaces. 
>
> For the following, the $$\F$$ is either $$\R$$ or $$\C$$.

#### $$\blue{\textsf{Definition (Adjoint map and self-adjoint)}}$$

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$T: V \to V$$ is a linear map.

    Then, the **adjoint map** of $$T$$ is defined as

    $$
    T^*: V \to V
    $$

    such that for all $$u, v \in V$$,

    $$
    (T(u), v) = (u, T^*(v))
    $$

    We say $$T$$ is **self-adjoint** if $$T = T^*$$.


#### $$\blue{\textsf{Proposition 3.1 (The existence and uniqueness of adjoint map)}}$$

- $$V$$ be a finite-dimensional inner product space over $$\F$$.

- $$T: V \to V$$ is a linear map.

    Then, **there exists a unique linear map** $$T^*: V \to V$$ such that for all $$u, v \in V$$,

    $$
    (T(u), v) = (u, T^*(v))
    $$

`Proof:`

#### $$\blue{\mathsf{Proposition 3.2}}$$

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$E = \set{v_1, \dots, v_n}$$ is an orthonormal basis of $$V$$.

- $$T: V \to V$$ is a linear map.

- $$A = [T]_E$$ is the matrix of $$T$$ with respect to $$E$$.

    Then, 

    $$
    [T^*]_E = \overline{A}^T
    $$

`Proof:`

#### Corollary 3.3

1. `A real symmetric matrix is diagonalizable`

    - $$A$$ is an $$n \times n$$ **real symmetric matrix**.

       Then, there exists an **orthogonal matrix** $$P$$ such that

        $$
        P^T A P = D
        $$
            
        where $$D$$ is a diagonal matrix.

2. `A complex Hermitian matrix is diagonalizable`
         
    - $$A$$ is an $$n \times n$$ complex **Hermitian matrix**.
    
        Then, there exists a **unitary matrix** $$P$$ such that
    
        $$
        P^* A P = D
        $$
                
        where $$D$$ is a diagonal matrix.

`Proof:`

#### $$\blue{\mathsf{Lemma 3.4}}$$

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$TR: V \to V$$ is a a self-adjoint linear map.


   Then, we have the following properties:

   1. `Eigenvalues of a self-adjoint linear map are real`

       - $$\lambda$$ is an eigenvalue of $$T$$.

           Then, $$\lambda \in \R$$.
    
    2. `Eigenvectors of a self-adjoint linear map are orthogonal`

        - $$\lambda$$ is an eigenvalue of $$T$$.

            Then, $$E_\lambda$$ is an orthogonal subset of $$V$$.
    
    3. `The dual space of V is invariant under T`

        - $$W$$ is a subspace of $$V$$.

            Then, $$W^\perp$$ is invariant under $$T$$.

`Proof:`

#### $$\blue{\textsf{Theorem 3.5 (Spectral Theorem)}}$$

- $$V$$ is a finite-dimensional inner product space over $$\F$$.

- $$T: V \to V$$ is a self-adjoint linear map.

    Then, $$V$$ has an orthonormal basis $$E$$ consisting of eigenvectors of $$T$$.


`Proof:`

#### $$\blue{\textsf{3.6 Algorithm to compute an orthonormal basis of eigenvectors}}$$

- $$V$$ is a $$n$$-dimensional inner product space over $$\F$$.

- $$T: V \to V$$ is a self-adjoint linear map.

    Then, we can compute an orthonormal basis $$E$$ consisting of eigenvectors of $$T$$ by the following algorithm:

    1. Compute the real eigenvalues $$\lambda_i$$ for $$1 \leq i \leq n$$ of $$T$$ and the corresponding eigenspaces $$E_{\lambda_i}$$ of $$T$$.

    2. Use **Gram-Schmidt process** to construct an orthonormal basis $$B_i$$ of $$E_{\lambda_i}$$ for $$1 \leq i \leq n$$.

    3. By the [Proposition 3.2](#2), for $$i \neq j$$, the eigenspaces $$E_{\lambda_i}$$ and $$E_{\lambda_j}$$ are orthogonal to each other. Hence,

        $$
        B = B_1 \cup \dots \cup B_n
        $$

        is an orthonormal basis of $$V$$.



