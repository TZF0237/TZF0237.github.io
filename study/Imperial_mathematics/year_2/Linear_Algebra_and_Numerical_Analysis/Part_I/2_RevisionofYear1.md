---
title: 2. Some revision from 1st Year Linear Algebra
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\deg{\operatorname{deg}}$$
$$\gdef\gcd{\operatorname{gcd}}$$

> For the following, we assume $$V$$ and $$W$$ is a finite-dimensional vector space over $$\F$$.

### Basis

#### Definition (Matrix of a linear map)

- $$T:V \to V$$ be a linear map.

- $$B = \{v_1, \dots, v_n\}$$ be a basis of $$V$$, let

$$
\begin{aligned}
T\left(v_{1}\right) & =a_{11} v_{1}+\ldots+a_{n 1} v_{n}, \\
& \vdots \\
T\left(v_{n}\right) & =a_{1 n} v_{1}+\ldots+a_{n n} v_{n}
\end{aligned}
$$

where all the coefficients $$a_{ij} \in \F$$. Then the **matrix of $$T$$ with respect to $$B$$** is the $$n \times n$$ matrix

$$
[T]_B = (a_{ij}) =
\left(\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1 n} \\
a_{21} & a_{22} & \ldots & a_{2 n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n 1} & a_{n 2} & \ldots & a_{n n}
\end{array}\right)
$$

#### Proposition (The matrix of a composition of linear maps is the product of the matrices)

- $$S: V \rightarrow V$$ 

- $$T: V \rightarrow V$$ be linear transformations
  
- $$B$$ be a basis of $$V$$. Then

$$
[S T]_{B}=[S]_{B}[T]_{B},
$$

where $$S T$$ is the composition of $$S$$ and $$T$$.

> **Remark**
>
>The propostion above gives us a lot nice properties of matrices. For example, if $$[T]_B = A$$ then $$[T^{k}]_B = A^{k}$$ for any positive integer $$k$$. More generally, if we are give such a polynomial $$q(x) = a_0 + a_1x + \dots + a_kx^k (a_i \in \F)$$, and define
>
> $$
  q(A) = a_0I + a_1A + \dots + a_kA^k
    $$
>
> and
>$$
q(T) = a_0I + a_1T + \dots + a_kT^k
$$
>
> where $$I$$ is the identity map. Then we have
> 
>$$
 [q(T)]_B = q([T]_B) = q(A)
$$

### Change of basis

#### Definition (Change of basis matrix)

- Bases $$E = \{e_1, \dots, e_n\}$$ 
  
- $$F = \{f_1, \dots, f_n\}$$ of $$V$$ be given,
  
  we write

$$
\begin{aligned}
f_{1} & =p_{11} e_{1}+\cdots+p_{n 1} e_{n}, \\
& \vdots \\
f_{n} & =p_{1 n} e_{1}+\cdots+p_{n n} e_{n} .
\end{aligned}
$$

and define $$P$$ to be the $$n \times n$$ matrix $$\left(p_{i j}\right)$$. We call $$P$$ **the change of basis matrix** from $$E$$ to $$F$$.

#### Proposition (The change of basis matrix is invertibl and the matrix of a linear map is similar to the matrix of the same linear map with respect to another basis)

1. The change of basis matrix $$P$$ is invertible.
   
2. If $$T: V \rightarrow V$$ is a linear map, then

    $$
    [T]_{F}=P^{-1}[T]_{E} P
    $$

    So, $$[T]_E$$ and $$[T]_F$$ are similar.

#### Determinant

As we mentioned before, if $$A$$ and $$B$$ are similar, then they have the same determinant. Hence, if $$T: V \rightarrow V$$ is a linear map, and $$E$$, $$F$$ are two bases of $$V$$, then the matrices $$[T]_E$$ and $$[T]_F$$ are similar and hence have the same determinant. So, we can define the determinant of $$T$$ to be the determinant of $$[T]_E$$ for any basis $$E$$ of $$V$$.

> **Remark**
>
>It is easy to notice that the matrix are just the expression of a linear map with respect to a basis. So, we can define the determinant of a linear map $$T$$ to be the determinant of $$[T]_E$$ for any basis $$E$$ of $$V$$ and the determinant of a linear transformation is invariant under change of basis.

### Eigen-stuffs

#### Definition (Characteristic polynomial)

The **characteristic polynomial** of $$T$$ is defined to be

$$
c_{T}(x) = \operatorname{det}(x I - [T]_B)
$$

This is a polynomial in $$x$$ of degree $$n = \dim V$$.

#### Proposition

1. The eigenvalues of $$T$$ are the roots of the characteristic polynomial $$c_T(x)$$.

2. If $$\lambda$$ is an eigenvalue of $$T$$, the eigenvectors corresponding to $$\lambda$$ are the non-zero vectors in

    $$
    E_{\lambda} = \{v \in V: (\lambda I_V - T)(v) = 0\} = \operatorname{Ker}(\lambda I_V - T)
    $$

3. The matrix $$[T]_B$$ is diagonal if and only if $$B$$ consists of eigenvectors of $$T$$.

#### Defintion (Eigenspace)

We call $$E_{\lambda}$$ the **$$\lambda$$-eigenspace** of $$T$$. Note that $$E_{\lambda}$$ is a subspace of $$V$$ since it is the kerel of the linear map $$\lambda I_V - T$$.

#### Proposition (Any linear transformation has eigenvalue(s))

- $$V$$ be a finite-dimentional vector space over $$\C$$,
  
- $$T: V \rightarrow V$$ be a linear map.
  
  Then $$T$$ has an eigenvalue $$\lambda \in \C$$.

> **Remark**
> 
> It is not always true for any field $$\F$$. For example, the linear transformation $$T: \R^2 \rightarrow \R^2$$ defined by
>
>$$
T\left(\left(\begin{array}{l}
x_1 \\
x_2
\end{array}\right)\right)=\left(\begin{array}{l}
x_2 \\
-x_1
\end{array}\right)
$$
>
> has the characteristic polynomial $$x^2 + 1$$ which has no roots in $$\R$$.

### Diagonalisation

#### Definition (Diagonalizable)

A linear map $$T: V \rightarrow V$$ is **diagonalizable** if there exists a basis $$B$$ of $$V$$ consisting of eigenvectors of $$T$$.

#### Proposition (The eigenvecotrs corresponding to distinct eigenvalues are linearly independent)

- $$T: V \rightarrow V$$ be a linear map. 
  
- Suppose $$v_{1}, \ldots, v_{k}$$ are eigenvectors of $$T$$ corresponding to distinct eigenvalues $$\lambda_{1}, \ldots, \lambda_{k}$$. 
  
  Then, $$v_{1}, \ldots, v_{k}$$ are linearly independent.

`Proof`: (By induction on $$k$$)

- `Base case`: k = 1

    Suppose $$v_1$$ is an eigenvector of $$T$$ corresponding to an eigenvalue $$\lambda_1$$. Then $$v_1 \neq 0$$, it must be linearly independent of itself set.

- `Inductive step`: 
  
  Assume that the propostion is true for some $$k \in \N$$. Let $$v_1, \cdots v_{k+1}$$ be eigenvectors of $$T$$ corresponding to distinct eigenvalues $$\lambda_1, \cdots, \lambda_{k+1}$$. Then

    $$
    T(v_1) = \lambda_1 v_1, \cdots, T(v_{k+1}) = \lambda_{k+1} v_{k+1}
    $$

    $$
    \begin{aligned}
    a_{1} v_{1}+\cdots+a_{k} v_{k} &=0 \\
    \implies a_1 = \dots = a_k &= 0
    \end{aligned}
    $$

    For $$k+1$$, suppose $$v_{k+1}$$ is an eigenvector of $$T$$ corresponding to an eigenvalue $$\lambda_{k+1}$$. Assume $$\exists a_{k+1} \in \F$$ such that

    $$
    \tag{1}
    a_{1} v_{1}+\cdots+a_{k} v_{k}+a_{k+1} v_{k+1} = 0
    $$

    Apply $$T$$ of both sides of (1), we have

    $$
   \tag{2}
    a_{1} \lambda_{1} v_{1}+\cdots+a_{k} \lambda_{k} v_{k}+a_{k+1} \lambda_{k+1} v_{k+1} = 0
    $$

    Take $$\lambda_{k+1} \times (1) - (2)$$, we have

    $$
    \tag{3}
    a_{1}(\lambda_{1}-\lambda_{k+1}) v_{1}+\cdots+a_{k}(\lambda_{k}-\lambda_{k+1}) v_{k} = 0
    $$

    By inductive hypothesis, $$v_1, \dots, v_k$$ are linearly independent. So all coeficients in (3) are zero. Hence,

    $$
    \begin{aligned}
    a_1(\lambda_1 - \lambda_{k+1}) &= 0 \\
    \vdots \\
    a_k(\lambda_k - \lambda_{k+1}) &= 0
    \end{aligned}
    $$

    Since all $$\lambda_{k+1} - \lambda{i} \neq 0$$ for all $$i = 1, \dots, k$$, we have $$a_1 = \dots = a_k = 0$$. So, $$a_{k+1}v_{k+1} = 0$$. Since $$v_{k+1} \neq 0$$, we have $$a_{k+1} = 0$$. Hence, $$v_1, \dots, v_{k+1}$$ are linearly independent. $$\square$$


#### Corollary (The number of distinct roots of the characteristic polynomial equals the dimension of the the vector space means the linear map is diagonalisable)

- $$V$$ be $$n$$-dimensional over $$\F$$,
  
- $$T: V \rightarrow V$$ a linear map. 

- The characteristic polynomial of $$T$$ has $$n$$ distinct roots in $$F$$. 

  Then $$T$$ is diagonalisable.

`Proof`:

Follows immediately from the proposition above.$$\square$$