---
title: 6. Triangularisation
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

### Good properties of triangular matrices

1. Upper triangular matrices are closed under multiplication by a scalar, under sum and under product.

2. The determinant, characteristic polynomial and eigenvalues of an upper triangular matrix are easy to compute.

  $$
  \begin{cases}
  \det A  = \prod_{i=1}^n \lambda_i\\
  c_A(x)  = \prod_{i=1}^n (x - \lambda_i)\text{ (A product of linear factor) }\\
  \text{Eigenvalues}  = \set{\lambda_1, \lambda_2, \cdots, \lambda_n}
  \end{cases}
  $$

> **Remark**: To test a triangular matrix is diagonalisable or not:
>
> - If $$\lambda_1 = \lambda_2 = \cdots = \lambda_n$$, then $$A$$ is diagonalisable if and only if $$A$$ is already diagonal.
>
> - If $$\lambda_i \neq \lambda_j$$ $$\forall i \neq j$$, then $$A$$ is diagonalisable.

### Characteristic polynomials and triangularisation

#### Theorem (Triangularisation Theorem)

- $$V$$ is an n-dimensional vector space over a field $$\F$$.
  
- $$T: V \rightarrow V$$ is a linear map
  
- The characteristic polynomial $$c(x)$$ of $$T$$ could be factorized as a product of linear factors, i.e. 
  
  $$
  c(x)=\prod_{1}^{n}\left(x-\lambda_{i}\right)\text{ with all }\lambda_{i} \in \F
  $$
  
Then, **there is a basis $$B$$ of $$V$$ such that the matrix $$[T]_{B}$$ is upper triangular.**

`Proof`: (By induction on $$n = \di V$$)

- `Base case`: $$n = 1$$, the result is obvious since every $$1 \times 1$$ matrix is upper triangular.

- `Inductive step`: Assume the result is true for $$n - 1$$. Let $$n = \di V$$ and $$T: V \to V$$ be a linear map whose characteristic polynomial

  $$
  c(x) = \prod_{i=1}^n (x - \lambda_i)
  $$

  could be factorized as a product of linear factors. Then $$c(x)$$ has a root $$\lambda \in \F$$. For each root, there is at least one corresponding eigenvector $$w_1 \in V$$ such that $$T(w_1) = \lambda w_1$$. Let $$W = \operatorname{Span}(w_1)$$, then $$W$$ is a $$T$$-invariant subspace of $$V$$.

  Now, we are in the situation that we disscussed before:

  - $$T: V \to V$$ is a linear map
  
  - $$T(W) \subseteq W$$

  Now, we consider the quotient space $$V / W$$ and the quotient $$\bar{T}: V / W \to V / W$$. 

  - From the previous proposition, the dimension of $$V / W$$ is

    $$
    \di (V / W) = \di V - \di W = n - 1
    $$

  - From the previous corollary, the characteristic polynomial of $$\bar{T}$$ is

    $$
    \bar{c}(x) = \frac{c(x)}{x - \lambda}
    $$

    that could divide the characteristic polynomial of $$T$$, which is $$c(x)$$. Therefore, $$\bar{c}(x)$$ could be factorized as a product of linear factors.

  - By inductive hypothesis, there is a basis $$\bar{B} = \set{W + v_2, W + v_3, \cdots, W + v_n}$$ of $$V / W$$ such that the matrix $$[\bar{T}]_{\bar{B}}$$ is upper triangular.

Finally, by the proposition that we introduced in last section, we have

$$
[T]_B = \begin{pmatrix}
\lambda & * \\
0 & [\bar{T}]_{\bar{B}}
\end{pmatrix}
$$

where $$B = \set{w_1, v_2, v_3, \cdots, v_n}$$ is a basis of $$V$$ and $$*$$ is some $$1 \times (n - 1)$$ matrix. It follows that $$[T]_B$$ is upper triangular.


#### Corollary (A matirx with factorizable characteristic polynomial is triangularisable)

- $$A$$ is an $$n \times n$$ matrix over a field $$\F$$
  
- The characteristic polynomial of $$A$$ could be factorized as a product of linear factors. i.e 
  
  $$
  c(x)=\prod_{1}^{n}\left(x-\lambda_{i}\right)\text{ with all }\lambda_{i} \in \F
  $$
  
Then, **$$A$$ is similar to an upper triangular matrix over $$F$$.**

`Proof`:

- $$V = \F^n$$ is an $$n$$-dimensional vector space over $$\F$$.

- Apply Triangularisation Theorem to the linear map $$T: V \to V$$ defined by $$T(v) = Av$$.

- Then, there is a basis $$B = \set{v_1, v_2, \cdots, v_n}$$ of $$V$$ such that the matrix $$[T]_B$$ is upper triangular.

- Since $$[T]_B = [A]_B$$, $$A$$ is similar to an upper triangular matrix over $$F$$.

> **Remark**:
>
> - If $$\F = \C$$, by the Fundamental Theorem of Algebra, the characteristic polynomial of $$A$$ could always be factorized as a product of linear factors. Therefore, **every matrix is triangularisable in $$\C$$.**
>
> - If $$\F = \R$$, some matrices could not be triangularisable. For example, the rotation matrices of $$\R^{2n} n \in \N$$ could not be triangularisable in $$\R$$.
>
> $$
\begin{pmatrix}
 0 & 1\\
  -1 & 0
\end{pmatrix}
$$
> which has characteristic polynomial $$x^2 + 1$$ that could not be factorized as a product of linear factors in $$\R$$.

#### The algorithm for triangularising a linear map (assuming the characteristic polynomial could be factorized as a product of linear factors)

1. Find an eigenvector $$w_1$$ for $$T$$ and let $$W_1 = \operatorname{Span}(w_1)$$

2. Consider the quotienet map $$\bar{T}: V / W_1 \to V / W_1$$.

3. Find an eigenvector $$W + w_2$$ for $$\bar{T}: V / W_1 \to V / W_1$$ and let $$W_2 = \operatorname{Span}(w_1, w_2)$$

4. Repeat the process until we get a basis $$B = \set{w_1, w_2, \cdots, w_n}$$ of $$V$$. Then the matrix $$[T]_B$$ is upper triangular.








