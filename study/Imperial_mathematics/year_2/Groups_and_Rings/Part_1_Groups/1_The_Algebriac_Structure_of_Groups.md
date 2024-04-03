---
title: 1. The Algebriac Structure of Groups
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\iso{\overset{\sim}{=}}$$
$$\gdef\ke{\operatorname{Ker}}$$
$$\gdef\im{\operatorname{Im}}$$
$$\gdef\lcm{\operatorname{lcm}}$$
$$\gdef\gcd{\operatorname{gcd}}$$
$$\gdef\ord#1{\operatorname{ord(#1)}}$$
$$\gdef\sgn{\operatorname{sgn}}$$
$$\gdef\bluetext#1{\blue{\textsf{#1}}}$$
$$\gdef\bluemath#1{\blue{\mathsf{#1}}}$$
$$\gdef\def{\blue{\textsf{def}}}$$
$$\gdef\imply{\blue{\mathsf{\implies}}}$$
$$\gdef\graytext#1{\gray{\textsf{#1}}}$$
$$\gdef\graymath#1{\gray{\mathsf{#1}}}$$
$$\gdef\ifif{\blue{\mathsf{\iff}}}$$
$$\gdef\abs#1{\vert #1 \vert}$$

### $$\bluetext{1.1 Groups, Subgroups and Cosets}$$

### $$\bluetext{1.1.1 Groups}$$

#### $$\bluetext{Definition (Group)}$$

- $$G$$ is a set.

- $$\cdot: G \times G \to G$$ is a group operation on $$G$$.

  $$\def$$ $$G$$ with $$\cdot$$ is a **group** $$\ifif$$ $$G$$ with $$\cdot$$ satisity the following 3 axioms:

  1. `Associativity:` $$\forall a, b, c \in G, (a \cdot b) \cdot c = a \cdot (b \cdot c)$$.

  2. `Identity:` $$\exists e \in G, \forall a \in G, e \cdot a = a \cdot e = a$$.

  3. `Inverse:` $$\forall a \in G, \exists a^{-1} \in G, a \cdot a^{-1} = a^{-1} \cdot a = e$$.

> For the following, we will not write the group operation explicitly, but we assume that it is clear from the context Instead, we use multiplicative notation for the group operation. We will also attreviate "$$G$$ with $$\cdot$$ is a group" to "$$G$$ is a group". Sometimes, to explicitly specify the group operation, we will write "$$G$$ with $$\cdot$$ is a group'' as $$(G, \cdot)$$.

> - `Uniqueness of the identity and the inverse:`
>
>    - `Identity` $$\imply$$ the uniqueness of $$e$$. -- By contradiction.
>
>    - `Inverse` $$\imply$$ the uniqueness of $$a^{-1}$$. -- By contradiction.


#### $$\bluetext{Theorem 1.1 Cancellation Law}$$

- $$G$$ is a group.

  - $$\imply$$ `Left/right cancel:` $$\forall a, b, c \in G, a  b = a c$$ or $$b a = c a$$ $$\Longrightarrow$$ $$b = c$$. 

  - $$\imply$$ `Identity cancel:` $$\forall a, b \in G, a b = b$$ or $$b a = b$$ $$\Longrightarrow$$ $$a = e$$ 

  `Proof:`

    - `Left/right cancel:` Left multiply by $$a^{-1}$$ or right multiply by $$a^{-1}$$.

    - `Identity cancel:` Right multiply by $$b^{-1}$$ or left multiply by $$b^{-1}$$. 

#### $$\bluetext{Definition (Abelian Group)}$$

$$\def$$ $$G$$ is an **abelian group** $$\ifif$$ $$G$$ is a group satisfying the following additional axiom:

- `Commutivity:` $$\forall a, b \in G, a b = b a$$.

#### $$\bluetext{Definition (Order of a Group)}$$

- $$G$$ is a group.

    $$\def$$ $$\abs{G} := \operatorname{card}(G)$$ as the **order of $$G$$**.

#### $$\bluetext{Definition (Order of an Element in a Group)}$$

- $$G$$ is a group.

- $$g$$ $$\in$$ $$G$$.

    $$\def$$ $$\ord{g} := \min\set{n \in \N \mid g^n = e}$$ as the **order of $$g$$**.

    $$\def$$ $$\ord{g} := \infty$$ $$\ifif$$ $$\forall n \in \N, a^n \neq e$$.

> - $$n \in \N, \abs{G} = n$$ $$\imply$$ $$\forall a \in G, \ord{a}\leq n$$. -- By **[Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle)**.

### $$\bluetext{1.1.2 Subgroups and Cosets}$$

#### $$\bluetext{Definition (Subgroup)}$$

- $$G$$ is a group.

- $$H$$ $$\subseteq$$ $$G$$.

    $$\def$$ $$H \leq G$$ as $$H$$ is a **subgroup** of $$G$$ $$\ifif$$ $$H$$ with $$\cdot$$ satisfies the following 3 axioms:

    1. `Identity:` $$e \in H$$.

    2. `Inverse:` $$\forall a \in H, a^{-1} \in H$$.

    3. `Closure:` $$\forall a, b \in H, a b \in H$$.

> - `Subgroup is a group:` If $$H \leq G$$, then $$H$$ with $$\cdot$$ is a group.
>
> ---
>
> - `Trival and non-proper subgroups:` Clearly, $$\set{e}\leq G$$ and $$G \leq G$$. We say $$\set{e}$$ is a **trival subgroup** of $$G$$ and $$G$$ is a **non-proper subgroup** of $$G$$. Addtionanly, if $$H \leq G$$ and $$H \neq \set{e}$$, we say $$H$$ is a **non-trival subgroup** of $$G$$ and if $$H \leq G$$ and $$H \neq G$$, we say $$H$$ is a **proper subgroup** of $$G$$.
>
> ---
>
> - `Subgroups relation defines a partial order on the set consisting of subgroups of a group:` "$$\leq$$" is a partial order on $$\set{H\mid H \leq G, G \textsf{ is a group}}$$. -- Check `reflexivity`, `antisymmetry` and `transitivity`.
>
> ---
>
> - `Subgroup criterion:` $$H \leq G$$ $$\ifif$$ $$H \neq \emptyset$$ and $$\forall a, b \in H, a b^{-1} \in H$$. 
> 
>     -- `=>:` By the defintion of subgroup. 
> 
>     -- `<=:` Show `identity`, then `inverse` and `closure` follows.


#### $$\bluetext{Definition (Cosets)}$$

- $$G$$ is a group

- $$H$$ $$\leq$$ $$G$$. 
  
    $$\def$$ the **left coset** of $$H$$ in $$G$$ by some $$g \in G$$ is $$g H := \set{g h \mid h \in H}$$.

    $$\def$$ the **right coset** of $$H$$ in $$G$$ by some $$g \in G$$ is $$H g := \set{h g \mid h \in H}$$.

>  - `In same left/right cosets <=> substraction from left/right gives a element of subgroup:`
> 
> - $$\forall a, b \in G$$, $$a$$ and $$b$$ are in some same left cosets of $$H$$ in $$G$$ $$\ifif$$ $$a^{-1} b \in H$$.  
> 
>    -- `=>:` If $$a, b \in gH$$, then $$a = g h_1, b = g h_2$$ for some $$h_1, h_2 \in H$$, so $$a^{-1} b = h_1^{-1} h_2 \in H$$.
> 
>    -- `<=:` Let $$g = a^{-1} b \in H$$, then $$a = a e$$, $$b = a g$$.
> 
> - $$\forall a, b \in G$$, $$a$$ and $$b$$ are in some same right cosets of $$H$$ in $$G$$ $$\ifif$$ $$a b^{-1} \in H$$.
>
>    -- `=> and <=:` Similar to the above.
>
>  --- 
>
> - `For every element in a left/right coset <=> generates the same left/right coset:`
>   
> - $$\forall a, b \in G$$, $$aH = bH$$ $$\ifif$$ $$a \in bH$$. --- 
>
>   -- `=>:` If $$ah \in aH$$ for some $$h \in H$$. Since $$aH = bH$$, $$ah \in bH$$, so $$ah = bh'$$ for some $$h' \in H$$, hence $$a = b(h'h^{-1}) \in bH$$.
>
>   -- `<=:` If $$a \in bH$$, then $$a = bh$$ for some $$h \in H$$. Hence, $$\forall s \in H$$, $$as = b(hs) \in bH$$, so $$aH \subseteq bH$$. Similarly, $$bH \subseteq aH$$.
>
> - $$\forall a, b \in G$$, $$Ha = Hb$$ $$\ifif$$ $$a \in Hb$$.
>
>   -- `=> and <=` Similar to the above.
>
>  --- 
>
> - `All left/right cosets form a partition of the whole group:`
> 
>    $$\forall a \in G$$, $$\exists! g \in G$$, s.t. $$a \in gH$$ and $$\exists! g \in G$$, s.t. $$a \in Hg$$.
>
> ---
> 
> - `All left/right cosets have the same cardinality:` 
> 
>   $$\forall a \in G$$, $$\abs{aH} = \abs{Ha} = \abs{H}$$. -- Check that the map $$h \mapsto ah(ha)$$ is a bijection from $$H$$ to $$aH(Ha)$$.

> For the following statments about **"could be seen"**, actually it means that there is a **group isomorphism** between the two groups, which we will discuss later and the relation $=$ dose not mean that the equlity holds in the set theory sense. We just use $=$ to denote the **isomorphism**. (Since we have not define the isomorphism yet, we will not use $=$ to denote the isomorphism in the following.)

### $$\bluetext{1.2 Some Abstract Groups}$$

### $$\bluetext{1.2.1 Product Groups}$$

#### $$\bluetext{Definition (Product Group)}$$

- $$G, H$$ are groups.

    $$\def$$ $$G \times H := \set{(g, h) \mid g \in G, h \in H}$$.

    $$\def$$ $$G \times H$$ is a **product group** $$\ifif$$ $$G \times H$$ is defined as above and with $$(g_1, h_1)  (g_2, h_2) = (g_1 g_2, h_1 h_2)$$ as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$G \times H$$.

> - `Trivial product group:` 
> 
>    $$\set{(g, e) \mid g \in G} \leq G \times H$$ and $$\set{(e, h) \mid h \in H} \leq G \times H$$. -- Check `identity`, `inverse` and `closure`.
>
> ---
>
> - `The product group is abelian <=> the two groups are abelian:`
> 
>    $$G \times H$$ is abelian $$\ifif$$ $$G$$ and $$H$$ are abelian. -- By the definition of product group.

### $$\bluetext{1.2.2 Symmetric Groups and Alternating Groups}$$

#### $$\bluetext{Defintion (Permutation)}$$

- $$X$$ is a set with $$n$$ elements for $$n \in \N$$.

- $$f: X \to X$$ is a function whose domain and codomain are both $$X$$.

    $$\def$$ $$f$$ is a **permutation** of $$X$$ $$\ifif$$ $$f$$ is a **bijection**.

> For the followng examples, let $$X = \{1, 2, 3, 4, 5\}$$.
>
> - `Cycle notation:` 
> 
>   The permutation $$f$$ could be written as **a product of cycle notation**, e.g. $$(1 2 3)(4 5)$$ means $$1 \to 2 \to 3 \to 1$$ and $$4 \to 5 \to 4$$, where each pair of parentheses represents a **cycle**.
>
> ---
>
> - `Two-row notation:`
> 
>    The permutation $$f$$ could also be written in **two-row notation**,e.g. $$\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 1 & 5 & 4 \end{pmatrix}$$, where the first row represents the elements of $$X$$ and the second row represents the images of the elements of $$X$$.
> 
> ---
> 
> - `Matrix notation:` 
> 
>    The permutation $$f$$ could be written as a **matrix**, e.g. $$\begin{pmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \\ 3 \\ 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \\ 1 \\ 5 \\ 4 \end{pmatrix}$$, if we use vector to represent the elements of $$X$$ by the order of $$X$$. Note that we are not treating the set consists of "1, 2, 3, 4, 5" as a vector space (Since we have not verify it.), but we are using the matrix to represent the permutation $$f$$. Since a permutation could be seen as a linear transformation, we could use matrix to represent it.

#### $$\bluetext{Definition (Symmetric Group)}$$

- $$X$$ is a set with $$n$$ elements for $$n \in \N$$.

- $$S_n = \set{f: X \to X \mid f \textsf{ is a permutation of } X}$$.

    $$\def$$ $$S_n$$ is a **symmetric group** $$\ifif$$ $$S_n$$ is defined as above and with function composition $$\circ$$ as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$S_n$$.

> - `Cardinality of symmetric group:`
> 
>    $$\abs{S_n} = n!$$ -- To count the number of permutations of $$X$$, we can first choose the image of $$1$$ from $$n$$ elements, then choose the image of $$2$$ from $$n - 1$$ elements, and so on.

#### $$\bluetext{Definition (Sign of a Permutation)}$$

- $$X$$ is a set with $$n$$ elements for $$n \in \N$$.

- $$f: X \to X$$ is a permutation of $$X$$.

    $$\def$$ $$\sgn(f) := det(A)$$, where $$A$$ is the matrix representation of $$f$$.

    $$\def$$ $$\sgn(f)$$ is the **sign of $$f$$**.

#### $$\bluetext{Definition (Alternating Group)}$$

- $$X$$ is a set with $$n$$ elements for $$n \in \N$$.

- $$A_n = \{f \in S_n \mid \sgn(f) = 1\}$$.

    $$\def$$ $$A_n$$ is an **alternating group** $$\ifif$$ $$A_n$$ is defined as above and with function composition $$\circ$$ as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$A_n$$.

### $$\bluetext{1.2.3 Cyclic Groups}$$

#### $$\bluetext{Definition (Cyclic Group Generated by an Element)}$$

- $$G$$ is a group.

- $$a \in G$$ is an element of $$G$$.

    $$\def$$ $$\langle a \rangle := \set{a^n \mid n \in \Z}$$.

    $$\def$$ $$\langle a \rangle$$ is a **cyclic group generated by $$a$$** $$\ifif$$ $$\langle a \rangle$$ is defined as above and with $$a^n \cdot a^m = a^{n + m}$$ as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$\langle a \rangle$$.

#### $$\bluetext{Definition (Cyclic Group of Order n and Generator)}$$

   - $$\def$$ $$C_n$$ is a **cyclic group of order $$n$$** $$\ifif$$ $$\exists g \in G, C_n = \langle g \rangle$$ and $$\ord{g} = n$$ for $$n \in \N \cup \{\infty\}$$.

   - $$\def$$ $$g$$ is a **generator** of $$C_n$$ $$\ifif$$ $$G = \langle g \rangle$$.


> - `The generator of a cyclic group is not unique.` -- For example, $$1$$ and $$-1$$ are both generators of $$(\Z, +) = \langle 1 \rangle = \langle -1 \rangle$$.
> 
> ---
>
> - `Cyclic group is abelian:` 
> 
>    $$C_n$$ is cyclic $$\imply$$ $$\forall g^i, g^j \in G, g^i g^j = g^j g^i$$ -- By the definition of cyclic group. But, the converse is not true. -- For example, $$(\Q, +)$$ is abelian but not cyclic.
>
> ---
>
> - $$C_n$$ is cyclic $$\ifif$$ $$\exists g \in G, \forall a \in G, \exists ! n \in \{0, \dots, \ord{g} - 1\}, a = g^n$$. 
> 
>    -- `=>:` Let $$g$$ be a generator of $$G$$, then for any $$a \in G$$, 
>      
>    --- `Existence:` $$\exists m \in \Z$$, s.t. $$a = g^m$$. Let $$i := m \mod \ord{g}$$, then $$a = g^i$$.
>
>    --- `Uniqueness:` By contradiction. If $$\exists i, j \in \{0, \dots, \ord{g} - 1\}$$, s.t. $$a = g^i = g^j$$, then $$g^{i - j} = e$$, hence $$\ord{g} \mid i - j$$, but $$i - j \in \{0, \dots, \ord{g} - 1\}$$, so $$i - j = 0$$, which is a contradiction. It follows that $$i = j$$.
>
>    -- `<=:` By the definition of cyclic group.
> 
> ---
> 
> - $$C_n$$ is cyclic $$\imply$$ There is at most one $$a \in G$$ s.t. $$\abs{a} = 2$$. -- By contradiction. If $$\exists a, b \in G, a \neq b$$ with $$\abs{a} = \abs{b} = 2$$, then $$a^2 = b^2 = e$$. By cyclicity, we write $$a = g^i, b = g^j$$, where $$g$$ is a generator of $$C_n$$ and $$i ,j \in \{0, \dots, n - 1\}, n =\ord{g}$$. Then $$g^i \neq e, g^j \neq e$$ and $$g^{2i} = g^{2j} = e$$. Hence, $$n \mid 2i, n \mid 2j$$, but $$2i, 2j \in \{0, 2, \dots, 2n - 2\}$$, so $$2i = 2j = 0$$ or $$2i = 2j = n$$. It follows that $$i = j = 0$$ or $$i = j = \frac{n}{2}$$ if $$n$$ is even, which is a contradiction.


### $$\bluetext{1.3 Some Concrete Groups}$$

### $$\bluetext{1.3.1 Linear Groups}$$

#### $$\bluetext{Definition (General Linear Group)}$$

- $$\F$$ is a field.

- $$n \in \N^+$$.

    $$\def$$ $$GL(n, \F): = \{A \in M_{n \times n}(\F) \mid \det(A) \neq 0\}$$.

    $$\def$$ $$GL(n, \F)$$ is a **general linear group** $$\ifif$$ $$GL(n, \F)$$ is defined as above and with matrix multiplication as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$GL(n, \F)$$.

>  - `Symmetric group is a subgroup of general linear group:`
> 
>    The symmetric group $$S_n$$ could be seen as a subgroup of $$GL(n, \F)$$ by identifying the permutation $$f$$ with the matrix $$A$$ whose $$i$$-th column is the $$f(i)$$-th standard basis vector. -- For example, $$f = (1 2 3) \in S_3$$ could be identified with $$A = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} \in GL(3, \F)$$.
>
> ---
>
> `Cyclic group is a subgroup of general linear group:`
>
>   $$C_n$$ could be seen as a subgroup of $$GL(1, \F)$$ by using the rotational matrix $$A = \begin{pmatrix} \cos \frac{2 \pi}{n} & -\sin \frac{2 \pi}{n} \\ \sin \frac{2 \pi}{n} & \cos \frac{2 \pi}{n} \end{pmatrix} \in GL(2, \F)$$ as the generator.


#### $$\bluetext{Definition (Special Linear Group)}$$

- $$\F$$ is a field.

- $$n \in \N^+$$.

    $$\def$$ $$SL(n, \F): = \{A \in M_{n \times n}(\F) \mid \det(A) = 1\}$$.

    $$\def$$ $$SL(n, \F)$$ is a **special linear group** $$\ifif$$ $$SL(n, \F)$$ is defined as above and with matrix multiplication as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$SL(n, \F)$$.


#### $$\bluetext{Definition (Orthogonal Group)}$$

- $$\F$$ is a field.

- $$n \in \N^+$$.

    $$\def$$ $$O(n, \F): = \{A \in GL(n, \F) \mid A^T A =A^TA= I\}$$.

    $$\def$$ $$O(n, \F)$$ is an **orthogonal group** $$\ifif$$ $$O(n, \F)$$ is defined as above and with matrix multiplication as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$O_n$$.

#### $$\bluetext{Definition (Special Orthogonal Group)}$$

- $$\F$$ is a field.

- $$n \in \N^+$$.

    $$\def$$ $$SO(n, \F): = \{A \in SL(n, \F) \mid A^T A =A^TA= I\}$$.

    $$\def$$ $$SO(n, \F)$$ is a **special orthogonal group** $$\ifif$$ $$SO(n, \F)$$ is defined as above and with matrix multiplication as group operation.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$SO_n$$.

### $$\bluetext{1.3.2 Klein Four-group and Dihedral Group}$$

#### $$\bluetext{Definition (Dihedral Group)}$$

- $$n \in \N^+$$.

  $$\def$$ $$r := \left(\begin{array}{cc} \cos \frac{2 \pi}{n} & -\sin \frac{2 \pi}{n} \\ \sin \frac{2 \pi}{n} & \cos \frac{2 \pi}{n} \end{array}\right) \in O(2, \R)$$ as a **rotation generator**. -- Rotate the plane by the angle of $$\frac{2\pi}{n}$$.

  $$\def$$ $$s := \left (\begin{array}{cc} 0 & 1 \\ 1 & 0 \end{array}\right) \in O(2, \R)$$ as a **reflection generator**. -- Reflect the plane about the $$x$$-axis.

  $$\def$$ $$D_{n} := \langle r, s \rangle = \set{r^i s^j \mid i \in \{0, \dots, n - 1\}, j \in \{0, 1\}}$$ as **dihedral group with the group operation $$r^i s^j \cdot r^k s^l = r^{i + k} s^{j + l}$$ for $$i, k \in \{0, \dots, n - 1\}, j, l \in \{0, 1\}$$.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$D_{n}$$.

#### $$\bluetext{Definition: Klein Four-group}$$

$$\def$$ $$K_4 := \set{e, a, b, c}$$ with the group operation defined by the following table:

| $$\cdot$$ | $$e$$ | $$a$$ | $$b$$ | $$c$$ |
| --- | --- | --- | --- | --- |
| $$e$$ | $$e$$ | $$a$$ | $$b$$ | $$c$$ |
| $$a$$ | $$a$$ | $$e$$ | $$c$$ | $$b$$ |
| $$b$$ | $$b$$ | $$c$$ | $$e$$ | $$a$$ |
| $$c$$ | $$c$$ | $$b$$ | $$a$$ | $$e$$ |


`Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$K_4$$.

> - $$K_4$$ is abelian. -- By the definition of Klein four-group.
>
> - $$K_4$$ is the smallest non-cyclic group. -- By the definition of Klein four-group.
>
> - $$K_4 = D_4 \leq S_4$$. -- Write $$K_4$$ in permutation form, i.e. $$K_4 = \set{e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)}$$.

> - `Dihedral group is a subgroup of orthogonal group:` 
> 
>    $$D_{n} \leq O(2, \R)$$. -- By the definition of dihedral group. The dihedral is a subgroup that consists the Euclidean distance-preserving transformations of the plane, which includes rotations and reflections. 
>
>  ---
>
> - `Dihedral group is a subgroup of symmetric group:`
>
>   $$D_{n} \leq S_n$$. -- Since rotation and reflection could be seen as a permutation of the vertices of a regular $$n$$-gon if we identify the vertices with the elements of $$X = \{1, \dots, n\}$$.
>
> ---
>
> - `Cardinality of dihedral group:`
> 
>   $$\abs{D_{n}} = 2n$$. -- By the definition of dihedral group. 
>
> ---
>
> - `Dihedral group is non-abelian if n >= 3:`
>
>  $$D_{n}$$ is non-abelian if $$n \geq 3$$. -- When $$n = 1$$, $$D_{1} = \set{e, (1, 2)} = C_2$$, which is abelian. When $$n = 2$$, $$D_{2} = \set{e, r, s, rs} = K_4$$, which is abelian (Introduced in the following.) When $$n \geq 3$$, $$D_{n}$$ is non-abelian. -- A conterexample: when $$n = 3$$, $$rs = (1 2)$$ and $$sr = (1 3)$$, so $$rs \neq sr$$. 


### $$\bluetext{1.4 Groups Defined on Integers Mod n}$$

#### $$\bluetext{Definition (The Set of Equivalence Classes of Integers Mod n)}$$

- $$n$$ $$\in$$ $$\N^+$$.

    $$\def$$ $$[a]_n := \set{a + kn \mid k \in \Z}$$ as the **equivalence class of $$a$$ modulo $$n$$**.

    $$\def$$ $$\Z_n = \{[0]_n, [1]_n, \dots, [n - 1]_n\}$$ as the **set of equivalence classes of integers modulo $$n$$**.

    `Well-definedness:` Check the three conditions of equivalence relation for $$[a]_n$$: `reflexivity`, `symmetry` and `transitivity`.

#### $$\bluetext{Definition (Additive Group of Integers Mod n)}$$

- $$n$$ $$\in$$ $$\N^+$$.

    $$\def$$ $$\Z_n$$ with $$[a]_n + [b]_n = [a + b]_n$$ as group operation is the **additive group of integers modulo $$n$$**.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$\Z_n$$.

> - $$\Z_n$$ is a cyclic abelian group with $$[1]_n$$ as the generator. -- Check the abelian groups axioms `associativity`, `identity`, `inverse` and `commutivity`.

#### $$\bluetext{Definition (Multiplicative Group of Integers Mod n)}$$

- $$n$$ $$\in$$ $$\N^+$$.

    $$\def$$ $$\Z_n^{\times} := \{[a]_n \in \Z_n \mid \gcd(a, n) = 1, a\in \{1, \dots, n - 1\}\}$$ with $$[a]_n \cdot [b]_n = [a \cdot b]_n$$ as group operation is the **multiplicative group of integers modulo $$n$$**.

    `Well-definedness:` Check group axioms (`associativity`, `identity`, `inverse`) for $$\Z_n^{\times}$$.

> - $$\Z_n^{\times}$$ is an abelian group. -- Check the abelian groups axioms `associativity`, `identity`, `inverse` and `commutivity`.


### $$\bluetext{1.5 Applications of Groups}$$

### $$\bluetext{1.5.1 Lagrange's Theorem and Euler's Theorem}$$

#### $$\bluetext{Definition (Index of a Subgroup)}$$

- $$G$$ is a group.

- $$H$$ $$\leq$$ $$G$$.

    $$\def$$ $$\abs{G : H} := \frac{\abs{G}}{\abs{H}}$$ as the **index of $$H$$ in $$G$$**.

#### $$\bluetext{Theorem 1.2 Lagrange's Theorem}$$

- $$G$$ is a group with $$\abs{G} < \infty$$.

- $$H$$ $$\leq$$ $$G$$.

- $$g$$ $$\in$$ $$G$$.

    - $$\imply$$ $$\abs{H} \mid \abs{G}$$, $$\abs{G} = \abs{G : H} \cdot \abs{H}$$.

    - $$\imply$$ $$\ord{g} \mid \abs{G}$$, $$\ord{g} = \abs{G : \langle g \rangle} \cdot \abs{\langle g \rangle}$$.

    `Proof:`

    - Immediate from the definition of index.

    - Let $$H = \langle g \rangle$$, which is a cyclic subgroup of $$G$$ generated by $$g$$. Then apply the first part.

> - `A group with prime order is cyclic:` $$G$$ is a group with $$\abs{G} = p$$ for some prime $$p$$ $$\imply$$ $$G$$ is cyclic. -- By Lagrange's theorem. Since $$\abs{G} = p$$, $$\abs{G : \langle g \rangle} = 1$$ or $$p$$, so $$\abs{G : \langle g \rangle} = 1$$, which means $$G = \langle g \rangle$$.


#### $$\bluetext{Definition (Euler Totient Function)}$$

- $$n$$ $$\in$$ $$\N^+$$.

    $$\def$$ $$\varphi(n) := \abs{\Z_n^{\times}} = \abs{\{[a]_n \in \Z_n \mid \gcd(a, n) = 1, a\in \{1, \dots, n - 1\}\}}$$ as the **Euler totient function**.

#### $$\bluetext{Theorem 1.3 Euler's Theorem}$$

- $$n$$ $$\in$$ $$\N^+$$.

- $$a \in \Z$$ with $$\gcd(a, n) = 1$$.

    $$\imply$$ $$a^{\varphi(n)} \equiv 1 \mod n$$.

    `Proof:`

    Let $$G = \Z_n^{\times}$$, which is a group with $$\abs{G} = \varphi(n)$$. Let $$H = \langle a \rangle$$, which is a cyclic subgroup of $$G$$ generated by $$a$$. Then apply Lagrange's theorem.







