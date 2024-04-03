---
title: 3. Algebraic and geometric multiplicaties of eigenvalues
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\dime{\operatorname{dim}}$$
$$\gdef\deg{\operatorname{deg}}$$
$$\gdef\gcd{\operatorname{gcd}}$$
$$\gdef\abs#1{\left| #1 \right|}$$



#### Definition (Algebraic multiplicity)

- $$T: V \rightarrow V$$ is a linear map with characteristic polynomial $$c_T(x)$$. 

- $$\lambda$$ is a root of $$c_T(x)$$ (i.e. an eigenvalue of $$T$$ ). 
  
    Then there is a positive integer $$a(\lambda)$$ such that

$$
p(x)=(x-\lambda)^{a(\lambda)} q(x),
$$

where $$\lambda$$ is not a root of $$q(x)$$. We call $$a(\lambda)$$ the **algebraic multiplicity** of $$\lambda$$ as an eigenvalue of $$T$$.

#### Definition (Geometric multiplicity)

The **geometric multiplicity** of $$\lambda$$ is defined to be

$$
g(\lambda)=\dime E_{\lambda} = \dime \operatorname{Ker}(T - \lambda I)
$$

where $$E_{\lambda}$$ is the $$\lambda$$-eigenspace of $$T$$.

#### Proposition (Algebraic multiplicity is at least equal to geometric multiplicity)

If $$\lambda$$ is an eigenvalue of $$T: V \rightarrow V$$, then 

$$
g(\lambda) \leq a(\lambda)
$$

`Proof`:

Assume $$r = g(\lambda) = \dime E_{\lambda}$$ and $$\{v_1, \cdots, v_r\}$$ be a basis of $$E_{\lambda}$$. We extend this to a basis of $$V$$:

$$
B = \{v_1, \cdots, v_r, w_1,\cdots, w_{s}\}
$$

We consider the matrix $$[T]_B$$:

$$
[T]_B = \begin{pmatrix}
\lambda I_r &* \\
0 &A
\end{pmatrix}
$$

where $$A$$ is an $$s \times s$$ matrix. So, the characteristic polynomial of $$T$$ is

$$
\begin{aligned}
c_T(x) &= \operatorname{det}(xI - [T]_B) \\
&= \operatorname{det}\begin{pmatrix}
xI_r - \lambda I_r &* \\
0 &xI_s - A
\end{pmatrix} \\
&= \operatorname{det}(xI_r - \lambda I_r) \operatorname{det}(xI_s - A) \\
&= (x - \lambda)^r \operatorname{det}(xI_s - A)\\
&= (x - \lambda)^r s(x)
\end{aligned}
$$

where $$s(x)$$ is the characteristic polynomial of $$A$$. So, $$a(\lambda) \geq r = g(\lambda)$$. $$\square$$

#### Theorem (Test for diagonalizability)

- $$\operatorname{dim} V=n$$,
  
- $$T: V \rightarrow V$$ be a linear map
  
- $$\lambda_{1}, \ldots, \lambda_{r}$$ be the distinct eigenvalues of $$T$$
  
- let the characteristic polynomial of $$T$$ be

$$
c_T(x)=\prod_{i=1}^{r}\left(x-\lambda_{i}\right)^{a\left(\lambda_{i}\right)}
$$

**so $$\sum_{i=1}^{r} a\left(\lambda_{i}\right)=n$$**. The following statements are equivalent:

1. $$T$$ is diagonalisable.

2. $$\sum_{i=1}^{r} g\left(\lambda_{i}\right)=n$$. (The sum of geometric multiplicities is equal to the dimension of $$V$$)

3. $$g\left(\lambda_{i}\right)=a\left(\lambda_{i}\right)$$ for all $$i$$. (The geometric multiplicity of each eigenvalue is equal to its algebraic multiplicity)

`Proof`:

- `1 iif 2`

    - `1 implies 2`: "$$T$$ is diagonalisable" $$\implies$$ $$\sum_{i = 1}^r g(\lambda_i) = n$$. 
        
        - By definition of diagonalisable, there exists a basis $$B$$ of $$V$$ consisting of eigenvectors of $$T$$. Hence, each vector in $$B$$ is in some eigenspace $$E_{\lambda_i}$$, so

            $$
           \sum_{i = 1}^r \dime E_{\lambda_i} = \sum_{i = 1}^r g(\lambda_i) \leq \abs{B}= n
            $$

        - From the previous proposition, we have $$\sum_{i=1}^r g(\lambda_i) \leq \sum_{i=1}^r a(\lambda_i) = n$$. Hence, we get

            $$
            \sum_{i = 1}^r g(\lambda_i) = n
            $$
    
    - `2 implies 1`: "$$\sum_{i = 1}^r g(\lambda_i) = n$$" $$\implies$$ "$$T$$ is diagonalisable".
        
        - By definition of geometric multiplicity, we have

            $$
            \sum_{i = 1}^r g(\lambda_i) = \sum_{i = 1}^r \dime E_{\lambda_i} = n
            $$

        - Let $$B_i$$ be a basis of $$E_{\lambda_i}$$ and define

            $$
            B = \bigcup_{i = 1}^r B_i
            $$

            Then $$B = \sum \abs{B_i} = \sum \dime E_{\lambda_i} = n$$ since $$B_i$$ are disjoint. 

            `Claim`: $$B$$ is a basis of $$V$$.

            `Proof of Claim`: Since $$\abs{B} = n = \dime V$$, it is enough to show that $$B$$ is linearly independent. Suppose there is a linear relation on the vector in $$B$$, and we write it as

            $$
            \sum_{a \in B_1} \alpha_0 a + \sum_{a \in B_2} \alpha_1 b + \dots + \sum_{a \in B_r} \alpha_{r-1} z = 0
            $$

            Write

            $$
            \begin{aligned}
            v_1 &= \sum_{a \in B_1} \alpha_0 a \\
            v_2 &= \sum_{a \in B_2} \alpha_1 b \\
            &\vdots \\
            v_r &= \sum_{a \in B_r} \alpha_{r-1} z
            \end{aligned}
            $$

            Then we have $$v_1 \in E_1, v_2 \in E_2, \dots, v_r \in E_r$$. As $$\lambda_i$$ are distinct, we have $$E_i \cap E_j = \{0\}$$ for $$i \neq j$$. Hence, $$v_1 = v_2 = \dots = v_r = 0$$. So, $$\alpha_0 = \alpha_1 = \dots = \alpha_{r-1} = 0$$. Since $$B_i$$ are linearly independent,

            $$
            v_i = \sum_{a \in B_i} \alpha_{i-1} a = 0 \implies \alpha_{i-1} = 0
            $$

            for all $$i = 1, \dots, r$$. Hence, $$B$$ is linearly independent and it is a basis of $$V$$.

        - Since $$B$$ is a basis of $$V$$ and each vector in $$B$$ is in some eigenspace $$E_{\lambda_i}$$, we have $$B$$ consists of eigenvectors of $$T$$. Hence, $$T$$ is diagonalisable.

- `2 iif 3`

    $$
    \begin{aligned}
    \sum_{i = 1}^r g(\lambda_i) = n & \Longleftrightarrow \sum_{i = 1}^r g(\lambda_i) = \sum_{i = 1}^r a(\lambda_i) \\
    & \Longleftrightarrow g(\lambda_i) = a(\lambda_i) \forall i
    \end{aligned} \square
    $$

#### Test for diagonalizability

1. Find the characteristic polynomial of $$T$$ and factorise it as

    $$
    c_T(x)=\prod_{i=1}^{r}\left(x-\lambda_{i}\right)^{a\left(\lambda_{i}\right)}
    $$

    **If it could not be factorised in $$\F$$, then $$T$$ is not diagonalisable.**

2. Calculate each $$g\left(\lambda_{i}\right) = \dime E_{\lambda_i}$$.

3. If $$g(\lambda_i) = a(\lambda_i)$$ for all $$i$$, then $$T$$ is diagonalisable.**$$\surd$$**

4. If $$g(\lambda_i) < a(\lambda_i)$$ for some $$i$$, then $$T$$ is not diagonalisable. **$$\times$$**