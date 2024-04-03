---
title: 1. Notations and Course Overview
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\dim{\operatorname{dim}}$$
$$\gdef\deg{\operatorname{deg}}$$
$$\gdef\gcd{\operatorname{gcd}}$$
$$\gdef\inner#1#2{\langle #1, #2 \rangle}$$
$$\gdef\norm#1{\left\lVert#1\right\rVert}$$

## 0. Notations

- $$T: V \rightarrow W$$ is a linear map.

- $$\F[x]$$ is the set of all polynomials in $$x$$ over $$\F$$.

   - `Addition`: $$p(x) + q(x) = \sum_{i=0}^{n} (a_i + b_i)x^i$$.

   - `Scalar Multiplication`: $$p(x)q(x) = \sum_{i=0}^{n} c_k x^k$$, where $$c_k = \sum_{i+j=k} a_i b_j$$.

- $$\operatorname{deg}(p(x))$$ is the degree of $$p(x)$$, with the highest power of $$x$$ with a non-zero coefficient.

- We use $$f, g$$ to denote $$f(x), g(x) \in \F[x]$$.

- We shall denote the block-diagonal matrix by $$A_{1} \oplus \cdots \oplus A_{k}$$. Thus for $$n_{i} \times n_{i}$$ matrices $$A_{i}(1 \leq i \leq k)$$, we write

    $$
    A_{1} \oplus \cdots \oplus A_{k}=\left(\begin{array}{cccc}
    A_{1} & & & \\
    & \cdot & & \\
    & & \cdot & \\
    & & A_{k}
    \end{array}\right),
    $$

    an $$n \times n$$ block-diagonal matrix, where $$n=\sum_{i=1}^{k} n_{i}$$.

## 1. Course Overview

> For now, we assume $$\F$$ is a field.

### Matrix results

#### Definition (Similar matrices)

- $$A$$ and $$B$$ be $$n \times n$$ matrices over $$\F$$
  we say that $$A$$ and $$B$$ are **similar** if there exists an invertible $$n \times n$$ matrix $$P$$ such that

  $$
  B = P^{-1}AP
  $$

then we write $$A \sim B$$.

Notice that the $$\sim$$ defines an equivalence relation. (Proof in Problem Sheet 1)

#### Proposition (Similar matrices share the same eigen-stuffs,ranks, traces, and determinants are )

Let $$A$$ and $$B$$ be $$n \times n$$ matrices over a field $$\F$$. If $$A \sim B$$, then $$A$$ and $$B$$ have the same

1. ranks(Multiplications by invertible matrices do not change the rank of a matrix)
   
2. characteristic polynomials -- implies the following 3, 4 and 5.
   
3. eigenvalues
   
4. determinant
   
5. trace

#### Major Aim

The major aim of the part of the course is to find a 'nice' matrix $$B$$ such that $$A \sim B$$ for an arbitrary $$n \times n$$ matrix $$A$$ and we will prove some theorems to show what 'nice' means. 

#### Diagonalization

We start from the easiest case: diagonalization. Recall the definition of diagonalization:

#### Definition (Diagonalization)

An $$n \times n$$ matrix $$A$$ over $$\F$$ is **diagonalizable** if $$A \sim D$$ where $$D = diag(\lambda_1, \dots, \lambda_n)$$ is a diagonal matrix with diagonal entries $$\lambda_1, \dots, \lambda_n \in \F$$, which are the eigenvalues of $$A$$.



> **Remark**
> 
> We could use the property of similarity of diagonal matrices to calculuate any     power $$A^k$$.
> $$
> A^k = (PDP^{-1})^k = PD^kP^{-1}
> $$
> where $$D^k = diag(\lambda_1^k, \dots, \lambda_n^k)$$.

However, most matrices are not diagonalizable. However, every complex matrix could be **triangularised**.

### Triangularisation

#### Theorem (Triangularization)

If $$A$$ is an $$n \times n$$ matrix over $$\mathbb{C}$$, then $$A$$ is similar to an upper triangular matrix, i.e. there exists $$P$$ such that

$$
P^{-1} A P=\left(\begin{array}{cccccc}
\lambda_{1} & & & & \\
0 & \lambda_{2} & & & * & \\
& & \cdot & & & \\
0 & 0 & & & \lambda_{n}
\end{array}\right) .
$$


> **Remark**
> 
>1. This does not always hold for any field $$\F$$.
>
>2. This upper triangular matrix is not unique since we can always do some row operations to make it more 'nice'. For example, we can make the diagonal entries to be $$1$$ by dividing the $$i$$-th row by $$\lambda_i$$.
>
>3. It is diserable to have a unique matrix of a nice form that is similar to $$A$$ and we have the next following form.

#### Definition (Jordan block)

A **Jordan block** of size $$k$$ is a $$k \times k$$ matrix of the form

$$
J_k(\lambda) = \begin{pmatrix}
\lambda_i &1 &0 &\dots &0 \\
0 &\lambda_i &1 &\dots &0 \\
\vdots &\vdots &\vdots &\ddots &\vdots \\
0 &0 &0 &\dots &\lambda_i
\end{pmatrix}
$$

#### Theorem (Jordan Canonical Form Theorem)

If $$A$$ is an $$n \times n$$ matrix over $$\C$$, $$A$$ is similar to a unique matrix

$$
A \sim J
$$

where

$$
J = \begin{pmatrix}
J_{k_1}(\lambda_1) &0 &\dots &0 \\
0 &J_{k_2}(\lambda_2) &\dots &0 \\
\vdots &\vdots &\ddots &\vdots \\
0 &0 &\dots &J_{k_r}(\lambda_r)
\end{pmatrix}
$$

The collection of *Jordan blocks* in $$J$$ is uniquely determined by $$A$$ and we call matrix $$J$$ the **Jordan canonical form(JCF)** of $$A$$.

> **Remark**
>
> - The uniqueness of $$J$$ is a vital part of this theorm since it gives a powerful test for the similarity of two complex matrices. i.e. $$A \sim B$$ if and only if $$A$$ and $$B$$ have the same Jordan canonical form.
>
> - Notice that the Jordan Canonical Form does not always exist for any field $$\F$$, such as $$\R, \Q, \F_p$$. For more general fields, we have the following theorem.

#### Rational Canonical Form theorm

To see this, we need to introduce a bit of new notaiton:

- $$\F[x]$$ is the set of all polynomials in $$x$$ over $$\F$$

- We call a polynomial $$f(x) \in \F[x]$$ **monic** if it has degree $$r \geq 1$$ and the coefficient of $$x^r$$ is $$1$$. i.e.

    $$
    f(x) = x^r + a_{r-1}x^{r-1} + \dots + a_1x + a_0
    $$
    
    where $$a_i \in \F$$ for $$i = 0, \dots, r-1$$.


#### Definition (Companion matrix)

- $$p(x)$$ be a monic polynomial of degree $$r$$. 
  
  The **companion matrix** of $$p(x)$$ is the $$r \times r$$ matrix $$C(p(x))$$ defined as follows:

$$
C(p(x)) = \begin{pmatrix}
0 &0 &\dots &0 &-a_0 \\
1 &0 &\dots &0 &-a_1 \\
0 &1 &\dots &0 &-a_2 \\
\vdots &\vdots &\ddots &\vdots &\vdots \\
0 &0 &\dots &1 &-a_{r-1}
\end{pmatrix}
$$

Note that the characteristic polynomial of $$C(p(x))$$ is $$p(x)$$.

#### Theorem (Rational Canonical Form Theorem)

Let $$A$$ be an $$n \times n$$ matrix over $$\F$$, with characteristic polynomial $$p(x)$$.

1. There exists a factorization $$p(x) = p_1(x) \dots p_k(x)$$ such that $$A$$ is similar to a block diagonal matrix with blocks $$C(p_i(x))$$ for $$i = 1, \dots, k$$.\

2. Under some conditions(To be completed), the polynomial $$p_1(x), \dots, p_k(x)$$ are uniquely determined by $$A$$ and we call the matrix in 1 the **rational canonical form(RCF)** of $$A$$. 

### 1.2 Geometry

#### Definition (Dot product)

If $$u = (u_1, \dots, u_n), v = (v_1, \dots, v_n) \in \R$$, then

$$
u \cdot v = u v^T = u_1v_1 + \dots + u_nv_n
$$

#### Definition (Length)

If $$v \in \R^n$$, then the **length** of $$v$$ is

$$
\norm{v} = \sqrt{v \cdot v} = \sqrt{v_1^2 + \dots + v_n^2}
$$

#### Definition (Distance)

If $$u, v \in \R^n$$, then the **distance** between $$u$$ and $$v$$ is

$$
d(u, v) = \norm{u - v}
$$

#### Orthogonality and symmetry

- $$P$$ is orthogonal if $$P^TP = I$$, which implies that $$Pu \cdot Pv = u \cdot v$$ for all $$u, v \in \R^n$$.
  
- $$P$$ is symmetric if $$P^T = P$$, which implies that $$Pu \cdot Pv = u \cdot Pv$$ for all $$u, v \in \R^n$$.

#### Definition (Inner Product Space)

An **inner product space** is a vector space $$V$$ with a map sending any two pair of vectors $$u, v \in V$$ to a scalar $$\inner{u}{v}$$ satisfying the following axioms:

1. The map is linear in each variable $$u$$ and $$v$$.

2. The map is symmetric, i.e. $$\inner{u}{v} = \inner{v}{u}$$.

3. $$\inner{u}{u} \geq 0$$ and $$\inner{u}{u} = 0$$ if and only if $$u = 0$$.