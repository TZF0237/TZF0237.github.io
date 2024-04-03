---
title: 5. Quotient Spaces
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

### Quotient spaces

#### Definition (Quotient set)

- $$V$$ is a vector space over $$\F$$
  
- $$W$$ is a subspace of $$V$$
  
  Define the **quotient set** $$V / W$$ to be the set of (right) cosets of $$W$$ in $$V$$, i.e.

    $$
    V / W=\{W + v: v \in V\}
    $$

    where

    $$
    {W+v}=\{w+v: w \in W\}
    $$

We define addition and scalar multiplication on $$V / W$$ by

- `Additive`: $$(W + v_1) + (W + v_2) = W + (v_1 + v_2)$$

- `Scalar Multiplication`: $$\lambda(W + v) = W + \lambda v$$

for all $$v_1, v_2 , v\in V$$ and $$\lambda \in \F$$.

>Check Well defined:
>
>> `Additive`: 
>>
>> Suppose $$W + v_1 = W + v_1'$$ and $$W + v_2 = W + v_2'$$, then $$v_1 - v_1' \in W$$ and $$v_2 - v_2' \in W$$. So, $$(v_1 + v_2) - (v_1' + v_2') \in W$$. Hence, $$W + (v_1 + v_2) = W + (v_1' + v_2')$$.
>> Using the fact that $$W + v = W + v' \iff v - v' \in W$$.
>
>> `Scalar Multiplication`:
>>
>> Suppose $$W + v = W + v'$$, then $$v - v' \in W$$. So, $$\lambda(v - v') \in W$$ and $$\lambda v -\lambda v' \in W$$. Hence, $$W + \lambda v = W + \lambda v'$$.


> **Remark**
>
> - The elements of $$V / W$$ are the right cosets of $$W$$ in $$V$$. Since the additive of vectors is commutative, we can also define the left cosets of $$W$$ in $$V$$ and the quotient space $$V / W$$ consists of left cosets is the same as the set of right cosets of $$W$$ in $$V$$. So we just call it cosets.
>
> - The elements of $$V / W$$ are the equivalence classes of the equivalence relation $$\sim$$ on $$V$$ defined by
>
>$$v_{1} \sim v_{2} \text { if and only if } v_{1}-v_{2} \in W$$
>
>- `Reflexive`: $$v - v = 0 \in W$$.
>
>- `Symmetric`: $$v_1 - v_2 \in W \iff -(v_1 - v_2) \in W$$.
>
>- `Transitive`: $$v_1 - v_2 \in W$$ and $$v_2 - v_3 \in W \implies v_1 - v_3 \in W$$.

#### Proposition ( $$V / W$$ is a vector space)

- $$V / W$$ is the set of cosets $$W + v$$ for $$v \in V$$
  
- Define addtion and scalar multiplication as above
  
  Then, $$V / W$$ is a vector space over $$\F$$.

`Proof`:

- `Addition axioms`: $$(V / W, +)$$ is an Abelian group with the identity $$W + 0 = W$$.

- `Distributive`: $$\lambda(W + v_1) + \lambda(W + v_2) = \lambda W + \lambda v_1 + \lambda W + \lambda v_2 = \lambda W + \lambda (v_1 + v_2) = \lambda(W + v_1 + v_2)$$.

- `Distributive`: $$(\lambda + \mu)(W + v) = (\lambda + \mu)W + (\lambda + \mu)v = \lambda W + \mu W + \lambda v + \mu v = \lambda(W + v) + \mu(W + v)$$.

- `Scalar Multiplication`: $$\lambda(\mu(W + v)) = \lambda(\mu W + \mu v) = \lambda \mu W + \lambda \mu v = (\lambda \mu)(W + v)$$.

- `Scalar Multiplication`: $$1(W + v) = 1W + 1v = W + v$$.

- `Scalar Multiplication`: $$0(W + v) = 0W + 0v = W$$. $$\square$$

> *From now, we will call the quotient set $$V / W$$ as a quotient space of $$V$$ by $$W$$.*

#### Proposition (The dimension of $$V / W$$ is $$\di V - \di W$$)

- $$V$$ is a finite-dimensional vector space over $$\F$$
  
- $$W$$ is a subspace of $$V$$

    Then, the dimension of $$V / W$$ is given by

    $$
    \operatorname{dim} V / W=\operatorname{dim} V-\operatorname{dim} W
    $$

`Proof`:

 Let $$B_w = \set{w_1, \dots, w_r}$$ be a basis of $$W$$ and extend this to a basis $$B = \set{w_1, \dots, w_r, v_{1}, \dots, v_s}$$ of $$V$$. Therefore, $$\di V = r + s$$ and $$\di W = r$$.

- `Claim`: $$\bar{B} = \set{W + v_1, \dots, W + v_s}$$ is a basis of $$V / W$$.

- `Proof of the claim`:

  - `Linearly Independent`: 
  
    Suppose
  
    $$\tag{1}
    \sum_{i=1}^{s} \lambda_{i}\left(W+v_{i}\right)=W+0 (\text{ the zero vector in } V / W)
    $$

    The left hand side of $$(1)$$ is equal to

    $$
    LHS = W + \sum_{i=1}^{s} \lambda_{i} v_{i} = W
    $$

    so

    $$
    \sum_{i=1}^{s} \lambda_{i} v_{i} \in W
    $$

    Hence, there exists scalars $$\mu_j \in \F$$ such that

    $$
    \sum_{i = 1}^s \lambda_i v_i = \sum_{j = 1}^r \mu_j w_j
    $$

    Since $$B = \{w_1, \dots, w_r, v_1, \dots, v_s\}$$ is a basis of $$V$$, this implies that

    $$
    \lambda_i = 0 \quad \forall i = 1, \dots, s
    $$

  - `Spanning`:

    Let $$W + v \in V / W$$, then there are scalars $$\lambda_i, \mu_j$$ such that

    $$
      v = \sum_{j = 1}^r \mu_j w_j + \sum_{i = 1}^s \lambda_i v_i = w + \sum_{i = 1}^s \lambda_i v_i
    $$

    for some $$w \in W$$. Hence,

    $$
    W + v = W + w + \sum_{i = 1}^s \lambda_i v_i = W + \sum_{i = 1}^s \lambda_i v_i = \sum_{i = 1}^s \lambda_i (W + v_i)
    $$

    So, $$\bar{B}$$ spans $$V / W$$.

- `Conclusion`:
      
  $$\bar{B}$$ is a basis of $$V / W$$ and $$\di V / W  = \di V - \di W$$. $$\square$$

### Quotient spaces and linear maps

#### Definition (Quotient map)

- $$W$$ is a subspace of $$V$$
  
- $$T_w : W \to W$$ is a restriction of $$T$$ to $$W$$
  
  Then we define the **quotient map** $$\bar{T}: V / W \to V / W$$ by

    $$
    \bar{T}(W+v)=W+T(v) \quad \forall v \in V .
    $$

> Check well defined:
>
> Suppose $$W + v = W + v'$$, then $$v - v' \in W$$. So, $$T(v - v') \in W$$. Hence, $$T(v) - T(v') \in W$$. So, $$W + T(v) = W + T(v')$$ and $$\bar{T}(W + v) = \bar{T}(W + v')$$.

> **Remark**: *How to find the basis of quotient space $$V / W$$?*
> 
>Consider a basis $$B_w$$ of $$W$$:
>
>$$
B_{w}=\left\{w_{1}, \ldots, w_{r}\right\}
$$
>
>then extend this to a basis $$B$$ of $$V$$:
>
>$$
B=\left\{w_{1}, \ldots, w_{r}, v_{1}, \ldots, v_{s}\right\}
$$
>
>then we have the basis $$\bar{B}$$ of $$V / W$$:
>
>$$
\bar{B}=\left\{W+v_{1}, \ldots, W+v_{s}\right\}
$$

#### Proposition (The matrix $$[T]_B$$ of $$T$$ could be written as a block matrix as $$[T_w]_{B_w}$$ and $$[\bar{T}]_{\bar{B}}$$)

- $$X=\left[T_{W}\right]_{B_{W}}$$(an $$r \times r$$ matrix, which the matrix of the restriction of $$T$$ to $$W$$ $$T_{W}: W \rightarrow W$$)
  
- $$Y=[\bar{T}]_{\bar{B}}$$ (an $$s \times s$$ matrix, which is the matrix of quotient map $$\bar{T}$$)
  
  Then,
  
  $$
  [T]_{B}=\begin{pmatrix}
  X & Z \\
  0 & Y
  \end{pmatrix}
  $$

  where $$Z$$ is a $$r \times s$$ matrix.

`Proof`:

Since $$T(W) \subseteq W$$, we can write

$$
T(w_i)  = \sum_{j = 1}^r x_{ji} w_j \quad (1 \leq i \leq r) \text{ where } w_j \text{ is the basis of } W 
$$

which is the matrix $$X = [T_W]_{B_W}$$.

$$
T(v_i)  = \sum_{j = 1}^r z_{ji} w_j + \sum_{k = 1}^s y_{ki} v_k \quad (1 \leq i \leq s) \text{ where } v_k \text{ is the basis of } V
$$

Then,

$$
\begin{aligned}
\bar{T}(W + v_i) & = W + T(v_i) \\
& = W + \sum_{j=1}^r z_{ji} w_j + \sum_{k=1}^s y_{ki} v_k \\
& = W + \sum_{j=1}^s y_{ji}v_j \\
& = \sum_{j=1}^s y_{ji}(W + v_j)
\end{aligned}
$$

Hence, $$[T_W]_{B_W} = X$$ and $$[\bar{T}]_{\bar{B}} = Y$$. Therefore,

$$
[T]_B = \begin{pmatrix}
X & Z \\
0 & Y
\end{pmatrix}
$$

where $$Z$$ is a $$r \times s$$ matrix. $$\square$$

#### Corollary (The characteristic polynomial of $$T$$ could be written as a product of the characteristic polynomials of $$T_w$$ and $$\bar{T}$$)

- $$T: V \rightarrow V$$ is a linear map.
  
- $$W$$ is a $$T$$-invariant subspace of $$V$$.
  
-  
    1. $$c(x)$$ is the characteristic polynomial of $$T$$.
  
    2. $$c_{1}(x)$$ is the characteristic polynomial of the restriction of $$T$$ to $$W$$, $$T_{W}: W \rightarrow W$$.

    3. $$c_{2}(x)$$ is the characteristic polynomial of the quotient map $$\bar{T}: V / W \rightarrow V / W$$.

  
  Then,

  $$
  c(x)=c_{1}(x) c_{2}(x)
  $$

`Proof`:

By the proposition above, we have

$$
[T]_{B}=\begin{pmatrix}
X & Z \\
0 & Y
\end{pmatrix}
$$

where $$X=\left[T_{W}\right]_{B_{W}}$$ and $$Y=[\bar{T}]_{\bar{B}}$$.

Hence,

$$
\begin{aligned}
c(x) & =\operatorname{det}(x I-[T]_{B}) \\
& =\operatorname{det}\begin{pmatrix}
x I_{r}-X & -Z \\
0 & x I_{s}-Y
\end{pmatrix} \\
& =\operatorname{det}(x I_{r}-X) \operatorname{det}(x I_{s}-Y) \\
& =c_{1}(x) c_{2}(x)
\end{aligned}
$$

where $$c_1(x)$$ is the characteristic polynomial of $$T_W$$ and $$c_2(x)$$ is the characteristic polynomial of $$\bar{T}$$. $$\square$$
