---
title: 4. Direct Sum
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

> Now, we assume that $$V$$ is a vector space over a field $$\F$$.

#### Definition (Sum of subspaces)

- $$V$$ is a vector space
  
- $$U_1, \dots, U_k$$ are subspaces of $$V$$

  Define the **sum** of $$U_1, \dots, U_k$$ to be the set

    $$
    U_1 + \dots + U_k = \{u_1 + \dots + u_k : u_i \in U_i \text{ for all } i\}.
    $$

#### Definition (Direct sum)

- $$V$$ is a vector space
  
- $$V_1, \dots, V_k$$ are subspaces of $$V$$. 
  
  We write

    $$
    \tag{1}
    V = V_1 \oplus \dots \oplus V_k
    $$

    If every vector $$v \in V$$ can be expressed as

    $$
    v = v_1 + \dots + v_k
    $$

    **unique vectors** $$v_i \in V_i$$. If $$(1)$$ holds, we say that $$V$$ is the **direct sum** of the subspaces $$V_1, \dots, V_k$$.

> **Remark**
>
>The uniqueness statement means that if
>
>$$
v_1 + \dots + v_k = v_1' + \dots + v_k'
$$
>
>with $$v_i, v_i' \in V_i$$ for all $$i$$, then $$v_i = v_i'$$ for all $$i$$.

#### Proposition (Direct sum of two subspaces is a subspace iif they intersect trivially)

For $$2$$ dimensional vector space $$V$$, the following statements are equivalent:

1. $$V=V_{1} \oplus V_{2}$$.

2. $$V_{1} \cap V_{2}=\{0\}$$ and $$\operatorname{dim} V_{1}+\operatorname{dim} V_{2}=\operatorname{dim} V$$.

`Proof`:

- `1 implies 2`: 
  
    - `First Part`:By contradiction. Assume 

    $$
    \exists v \in V_{1} \cap V_{2} \text{ and } v \neq 0.
    $$

    then

    $$
    v =v+0 = 0+v \in V_{1} \oplus V_{2}
    $$

    which gives two different expressions of $$v$$, a contradiction. Hence, $$V_{1} \cap V_{2}=\{0\}$$.

    - `Second Part`:

    Since $$V = V_1 \oplus V_2$$ which is a special case of sum of subspaces, we have

    $$
    \begin{aligned}
    \dime V& = \dime (V_1 + V_2) \\
    & = \dime V_1 + \dime V_2 - \dime (V_1 \cap V_2) \\
    & = \dime V_1 + \dime V_2
    \end{aligned}
    $$

- `2 implies 1`: Assume $$(2)$$,

    - `Sum`:

    $$
    \dime (V_1 + V_2) = \dime V_1 + \dime V_2 - \dime (V_1 \cap V_2) = \dime V_1 + \dime V_2 = \dime V
    $$

    which implies $$V = V_1 + V_2$$. 
    
    - `Direct sum`: 
  
    Now we need to show that the sum is direct, which is guaranteed by **uniqueness** of the expression of $$v$$. We prove by contradiction. Assume

    $$
    v = v_1 + v_2 = v_1' + v_2' \text{ with } v_1, v_1' \in V_1, v_2, v_2' \in V_2
    $$

    then 

    $$
    v_1 - v_1'  = v_2' - v_2  \in V_1 \cap V_2
    $$

    It follows that $$v_1 - v_1' = v_2' - v_2 = 0$$, which implies $$v_1 = v_1'$$ and $$v_2 = v_2'$$.

    Hence $$V = V_1 \oplus V_2$$. $$\square$$

#### Proposition (Check direct sum of $$k$$ subspaces)

The following statements are equivalent:

1. $$V=V_{1} \oplus V_{2} \oplus \cdots \oplus V_{k}$$.
   
2. - $$\operatorname{dim} V=\sum_{i=1}^{k} \operatorname{dim} V_{i}$$
   
   -  If $$B_{i}$$ is a basis for $$V_{i}$$ for $$1 \leq i \leq k$$, then the union $$B=$$ $$B_{1} \cup \cdots \cup B_{k}$$ is a basis of $$V$$.

`Proof`:

- `1 implies 2`:
  
  Assume 

  1. $$V = V_1 \oplus \dots \oplus V_k$$.

  2. $$B_i$$ be the basis of $$V_i$$ for $$1 \leq i \leq k$$.

  3. $$B = B_1 \cup \dots \cup B_k$$.

  `Claim`: $$B$$ is a basis of $$V$$.

  `Proof of Claim`:
      
    - `Spanning`: $$B$$ is clearly spanning $$V$$ since $$V = V_1 + \dots + V_k$$.

    - `Linearly independent`: Suppose there is a linear relation:

        $$
        \tag{2}
        \sum_{a \in B_1} \alpha_a a + \dots + \sum_{a \in B_k} \alpha_z z = 0
        $$

        Since $$V = V_1 \oplus \dots \oplus V_k$$, hence

        $$
        0 = 0 + \dots + 0 
        $$

        is the **unique expression** for the zero vector as a sum of vectors in $$V_1, \dots, V_k$$. Hence, each sum in $$(2)$$ must be zero, so all $$\alpha$$ in $$(2)$$ are $$0$$. Hence $$B$$ is linearly independent.

    Hence $$B$$ is a basis of $$V$$.

    - `Dimension sum`: From the proposition above, we see that

        $$
        V_i \cap V_j = \{0\} \text{ for all } i \neq j
        $$

        and hence,

        $$
        B_i \cap B_j = \{\emptyset\} \text{ for all } i \neq j
        $$

        Besides, $$B$$ is the disjoint union of $$B_i$$ for $$1 \leq i \leq k$$. Therefore,

        $$
        \dime V = \abs{B} = \sum_{i=1}^k \abs{B_i} = \sum_{i=1}^k \dime V_i
        $$
    
- `2 implies 1`: Assume

    1. $$\dime V = \sum_{i=1}^k \dime V_i$$.
 

    2. $$B_i$$ is a basis for $$V_i$$ for $$1 \leq i \leq k$$ with $$B = \bigcup_{i=1}^k B_i$$ is a basis of $$V$$.

    - `Subspace sum`: By 1, we have

        $$
        \abs{B} = \sum_{i=1}^k \abs{B_i}
        $$

        Therefore, $$B_i$$ are disjoint. Since $$B$$ is a basis of $$V$$, for every $$v \in V$$, $$v \in \operatorname{Span}(B)$$. Hence, $$v$$ can be expressed as a linear combination of vectors in $$V_i$$ for $$1 \leq i \leq k$$. So
    
    $$
    V = V_1 + \dots + V_k
    $$

    - `Uniqueness`: By contradiction, we suppose there exists $$v \in V$$ such that

        $$
        v = v_1 + v_2 + \dots + v_k = v_1' + v_2' + \dots + v_k'
        $$
            
        with $$v_i, v_i' \in V_i$$ for all $$i$$. Then
               
        $$
        0 = (v_1 - v_1') + (v_2 - v_2') + \dots + (v_k - v_k')
        $$

        If not every $$v_i - v_i' = 0$$, this equation will give a non trivial linear combination in the basis $$B$$, which is a linearly independent set. It gives a contradiction. Hence, $$v_i = v_i'$$ for all $$i$$.

    Hence, $$V = V_1 \oplus \dots \oplus V_k$$. $$\square$$

#### Definition ($$T$$-invariant)

- $$T: V \rightarrow V$$ is a linear map
  
- $$W$$ is a subspace of $$V$$. 

    We say that $$W$$ is **$$T$$-invariant** if 
    
    $$
    T(W) \subseteq W
    $$
    
    where

    $$T(W)=\{T(w): w \in W\}$$ 
    
    (in other words, $$T$$ maps $$W \rightarrow W$$ ).

#### Definition (Restriction of $$T$$, which is a linear map)

- $$T$$ is a linear map from $$V$$ to $$V$$.

- $$W$$ is $$T$$ - invariant.

    We define the **restriction** of $$T$$ to $$W$$ to be the linear map $$T_{W}: W \rightarrow W$$ defined by

    $$
    T_{W}(w)=T(w) \text { for all } w \in W
    $$

#### Proposition (Direct sum of $$T$$-invariant subspaces)

- $$T: V \rightarrow V$$ is a linear map
  
- $$V=V_{1} \oplus \cdots \oplus V_{k}$$, where each subspace $$V_{i}$$ is $$T$$-invariant. 

- $$B_{i}$$ is a basis of $$V_{i}$$ for $$1 \leq i \leq k$$.

- $$A_{i}$$ is the matrix of the restriction $$\left[T_{V_{i}}\right]_{B_{i}}$$. 
  
- $$B$$ is the basis $$\bigcup_{1}^{k} B_{i}$$ of $$V$$
  
  The matrix $$[T]_{B}$$ is **the block-diagonal matrix**.

    $$ 
    [T]_B =\begin{pmatrix}
    A_{1} & 0 & \cdots & 0 \\
    0 & A_{2} & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & A_{k}
    \end{pmatrix}
    $$

`Proof`:

Let $$B_1 = {v_1, \dots, v_r}$$, then $$T(v_1) = T_{V_1}(v_1)$$ is a vector in $$V_1$$. Hence, $$T(v_1)$$ can be expressed as a linear combination of $$B_1$$. Similarly, $$T(v_i)$$ can be expressed as a linear combination of $$B_i$$ for $$1 \leq i \leq r$$. Therefore, we see the top left hand block of $$[T]_B$$ is the $$r \times r$$ matrix $$(a_{ij})$$, which is $$[T_{V_1}]_{B_1}$$. Carrying like this, we see that the $$i$$th block of $$[T]_B$$ is $$[T_{V_i}]_{B_i}$$ for $$1 \leq i \leq k$$. $$\square$$ 





