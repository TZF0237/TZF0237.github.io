---
title: 2. The Relations of Groups and Subgroups
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\iso{\overset{\sim}{=}}$$
$$\gdef\ke#1{\operatorname{Ker}(#1)}$$
$$\gdef\im#1{\operatorname{Im}(#1)}$$
$$\gdef\lcm{\operatorname{lcm}}$$
$$\gdef\gcd{\operatorname{gcd}}$$
$$\gdef\mod{\operatorname{mod}}$$
$$\gdef\ord#1{\operatorname{ord}(#1)}$$
$$\gdef\sgn{\operatorname{sgn}}$$
$$\gdef\Aut#1{\operatorname{Aut}(#1)}$$
$$\gdef\bluetext#1{\blue{\textsf{#1}}}$$
$$\gdef\bluemath#1{\blue{\mathsf{#1}}}$$
$$\gdef\def{\blue{\textsf{def}}}$$
$$\gdef\imply{\blue{\mathsf{\implies}}}$$
$$\gdef\graytext#1{\gray{\textsf{#1}}}$$
$$\gdef\graymath#1{\gray{\mathsf{#1}}}$$
$$\gdef\ifif{\blue{\mathsf{\iff}}}$$
$$\gdef\defas{\blue{\mathsf{:=}}}$$
$$\gdef\norsub{\trianglelefteq}$$
$$\gdef\difif{\blue{\mathsf{: \longleftrightarrow}}}$$
$$\gdef\abs#1{\vert #1 \vert}$$

### $$\blue{\mathsf{2.1\;Group\; \sim morphisms}}$$

### $$\bluetext{2.1.1. Group Homomorphism}$$

#### $$\bluetext{Definition (Group Homomorphism)}$$

- $$G, H$$ are groups

- $$f: G \to H$$ is a function

  $$\def$$ $$f$$ is a **group homomorphism** $$\difif$$ $$f(ab) = f(a)f(b) \; \forall a, b \in G$$

> - `Homomorphism preserves the identity element and inverse element`
>
>    - $$f$$ is a homomorphism $$\imply$$ $$f(e_G) = e_H$$, where $$e_G, e_H$$ are identity elements of $$G, H$$ respectively -- By uniqueness of identity element.
>
>    - $$f$$ is a homomorphism $$\imply$$ $$f(a^{-1}) = f(a)^{-1} \; \forall a \in G$$ -- By uniqueness of inverse element.

#### $$\bluetext{Definition (Image and Kernel)}$$

- $$G, H$$ are groups

- $$f: G \to H$$ is a group homomorphism

  $$\def$$ $$\im{f} : = \{f(a) \mid a \in G\}$$ is the **image** of $$f$$

  $$\def$$ $$\ke{f} : = \{a \in G \mid f(a) = e_H\}$$ is the **kernel** of $$f$$

> - `Image is a subgroup of $$H$$:` $$\im{f} \leq H$$ -- By subgroup criterion.
>
> - `Kernel is a subgroup of $$G$$:` $$\ke{f} \leq G$$ -- By subgroup criterion.
>
> ---
>
> - $$f$$ is surjective $$\ifif$$ $$\im{f} = H$$ -- By definition of surjective.
>
> - $$f$$ is injective $$\ifif$$ $$\ke{f} = \{e_G\}$$ 
>
>    -- `=>:` By contradiction.
>
>    -- `<=:` For any $$a, b \in G$$, assume $$f(a) = f(b)$$. Then, $$f(a) (f(b))^{-1} = e_H$$. By homomorphism, $$f(a) (f(b))^{-1} = f(a (b^{-1})) = e_H$$. Thus, $$a (b^{-1}) \in \ke{f}$$ $$\implies$$ $$a (b^{-1}) = e_G$$. Hence, $$a = b$$.
>
> ---
>
> - $$\forall a, b \in G$$, $$f(a) = f(b)$$ $$\ifif$$ $$a b^{-1} \in \ke{f}$$
>
>    -- `=>:` $$f(a) = f(b)$$ $$\implies f(a) (f(b))^{-1} = e_H$$ $$\implies f(a b^{-1}) = e_H$$ $$\implies a (b^{-1}) \in \ke{f}$$.
>
>   -- `<=:` $$a (b^{-1}) \in \ke{f}$$ $$\implies$$ $$f(a (b^{-1})) = e_H$$ $$\implies f(a) (f(b))^{-1} = e_H$$ $$\implies f(a) = f(b)$$.
>
> - $$\forall a \in G$$, $$f(a) = e_H$$ $$\ifif$$ $$a^{-1} b \in \ke{f}$$ -- Similar to above.
>
> ---
>
> - `Composition of homomorphisms is a homomorphism:` 
> 
>    $$f: G \to H$$, $$g: H \to K$$ are homomorphisms $$\imply$$ $$g \circ f: G \to K$$ is a homomorphism. -- By definition of composition of functions and homomorphisms.

#### $$\bluetext{Examples of Group Homomorphisms}$$

##### $$\blue{\textsf{1. Trace of a matrix}}$$
   
- $$\operatorname{Mat}(n, \R)$$ is the set of $$n \times n$$-matrices with real entries with the group operation defined by **addition of matrices**.

   $$\def$$ **trace** \defas $$\operatorname{tr}: \operatorname{Mat}(n, \R) \rightarrow \R$$ $$\difif$$ $$\operatorname{tr}(A) = \sum_{i=1}^n a_{ii}$$ for $$A = (a_{ij}) \in \operatorname{GL}(n, \R)$$.

   $$\imply$$  $$\operatorname{tr}$$ is a homomorphism -- $$\operatorname{tr}(A + B) = \sum_{i=1}^n (a_{ii} + b_{ii}) = \sum_{i=1}^n a_{ii} + \sum_{i=1}^n b_{ii} = \operatorname{tr}(A) + \operatorname{tr}(B)$$.

##### $$\blue{\textsf{2. Determinant of a matrix}}$$
   
- $$\operatorname{GL}(n, \R)$$ is the group of invertible $$n \times n$$-matrices with real entries with respect to multiplication of matrices.

   $$\def$$ **determinant** $$\defas$$ $$\operatorname{det}: \operatorname{GL}(n, \R) \rightarrow \R^{\times}$$ $$\difif$$ $$\operatorname{det}(A) = \sum_{\sigma \in S_n} \sgn(\sigma) \prod_{i=1}^n a_{i \sigma(i)}$$ for $$A = (a_{ij}) \in \operatorname{GL}(n, \R)$$. -- $$\operatorname{det}(AB) = \operatorname{det}(A) \operatorname{det}(B)$$.

##### $$\blue{\textsf{3. Sign of a permutation}}$$

- $$S_n$$ is the symmetric group of permutations of $$\{1,2,...,n\}$$.

  $$\def$$ **sign** $$\defas$$ $$\sgn: S_n \rightarrow \{\pm 1\}$$ $$\difif$$ $$\sgn(\sigma) = \operatorname{det}(A)$$ if we use the matrix form of $$\sigma \in S_n$$. -- Homomorphisis of $$\operatorname{det}$$.

### $$\bluetext{2.1.2. Group Isomorphism and Automorphism}$$

#### $$\bluetext{Definition (Group Isomorphism and Isomorphic Groups)}$$

- $$G, H$$ are groups

- $$f: G \to H$$ is a function

  $$\def$$ $$f: G \iso H$$ is an **group isomorphism** $$\difif$$ $$f$$ is a group homomorphism and a bijection.

  $$\def$$ $$G \iso H$$ $$\difif$$ $$\exists f: G \iso H$$

> - `Identity map is an isomorphism:` 
> 
>   $$\mathsf{id}_G: G \iso G$$ is an isomorphism. -- Check the definition above.
>
> - `Inverse of isomorphism is an isomorphism:` 
> 
>   $$f: G \to H$$ is an isomorphism $$\imply$$ $$f^{-1}: H \to G$$ is an isomorphism. -- By definition of inverse function and the inverse of homomorphism is a homomorphism.
>
> ---
>
> - `The composition of isomorphisms is an isomorphism:` 
> 
>   $$f: G \iso H$$, $$g: H \iso K$$ are isomorphisms $$\imply$$ $$g \circ f: G \iso K$$ is an isomorphism. -- By definition of composition of functions and isomorphisms.
>
> ---
>
> - `Isomorphic is an equivalence relation:` Check the definition of equivalence relation: `reflexive`, `symmetric`, `transitive`.
>
> ---
>
> - `Isomorphic groups means we could not distinguish them by their group structures.` -- Since they are just the same collection of actions with different notations. 

> For now, we could abandon the notation $$=$$ between groups and use $$\iso$$ instead.

#### $$\bluetext{Definition (Group Automorphism)}$$

- $$G$$ is a group

- $$f: G \to H$$ is a function

  $$\def$$ $$f$$ is an **group automorphism** $$\difif$$ $$f$$ is a group isomorphism and $$G = H$$.

> - `Identity map is an automorphism:` $$\operatorname{id}_G: G \iso G$$ is an automorphism. -- Check the definition above.
>
> ---
>
> - `Inverse of automorphism is an automorphism:` 
> 
>   $$f: G \to H$$ is an automorphism $$\imply$$ $$f^{-1}: H \to G$$ is an automorphism. -- By definition of inverse function and the inverse of isomorphism is an isomorphism.
>
> ---
>
> - `The composition of automorphisms is an automorphism:` 
> 
>   $$f: G \iso H$$, $$g: H \iso K$$ are automorphisms $$\imply$$ $$g \circ f: G \iso K$$ is an automorphism. -- By definition of composition of functions and automorphisms.
>
>  ---
>
>  - $$f: G \to G$$ $$\defas$$ $$f(g) = g^{-1}$$ is an automorphism $$\ifif$$ $$G$$ is an abelian group. 
>  
>    -- `=>:` By defintion of automotphism and inverse of the multiplication.
>
>    -- `<=:` Homomorphism implied by the abelian group and bijeciive implied by the uniqueness of inverse element.

#### $$\bluetext{Definition (Group of Automorphisms)}$$

- $$G$$ is a group

- $$\Aut{G} : = \{f: G \iso G \mid f \text{ is an automorphism}\}$$

  $$\def$$ $$\Aut{G}$$ is a **group of automorphisms** of $$G$$ with the group operation defined by **composition of functions**.

  `Well-definedness:` 
  
  Check the group axioms: `associativity:` Composition is associative, `identity element:` $$\operatorname(id)$$, `inverse element:` Inver of function.

### $$\blue{\mathsf{2.2\;Group\; \sim subgroups}}$$

### $$\bluetext{2.2.1. Conjugations and Normal Subgroups}$$

#### $$\bluetext{Definition (Conjugation)}$$

- $$G$$ is a group.

- $$g$$ $$\in$$ $$G$$.

   $$\def$$ **conjugation by $$g$$** $$\defas$$ $$f_g: G \rightarrow G$$ $$\difif$$ $$f_g(x) = g x g^{-1}$$ for $$x \in G$$.

> - `Conjugation is an automorphism:` 
> 
>    $$f_g$$ is an automorphism. -- Check the conditions of automorphism: `well-definedness`, `homomorphism`, `bijective`. Then, the propeties of automorphism, i.e. `identity element`, `inverse element`, `composition of automorphisms`, are also satisfied for conjugation.

#### $$\bluetext{Definition (Conjugacy Class)}$$

- $$G$$ is a group.

- $$a, b$$ $$\in$$ $$G$$.

    $$\def$$ **conjugacy** of $$a$$ and $$b$$ $$\defas$$ $$a \sim b$$ $$\difif$$ $$\exists g \in G$$, $$b = g a g^{-1}$$ -- An equivalence relation. Check the definition of equivalence relation: `reflexive`, `symmetric`, `transitive`.

    $$\def$$ **conjugacy class** of $$a$$ $$\defas$$ $$Cl(a)$$ $$\defas$$ $$\{g a g^{-1} \mid g \in G\}$$

> - `In linear algebra, conjugacy class is the same as similarity class.` -- Since $$A \sim B$$ $$\iff$$ $$\exists P$$, $$B = P A P^{-1}$$.
>
> ---
>
> - `There is no conjugacy class in abelian groups:`
>
>    $$G$$ is a abelian group $$\ifif$$ $$\forall a, b \in G$$ with $$a \neq b$$, $$a \nsim b$$. 
>
>    -- `=>:` For abelian group, since every element is commutative. Then, conjugation is just doing nothing. Therefore, $$a \neq b$$ $$\implies$$ $$a \nsim b$$.
>
>    -- `<=:` By contradiction. Assume $$G$$ is not abelian $$\implies$$ $$\exists a, b \in G$$ with $$a \neq b$$ such that $$a b = b a$$ $$\implies$$ $$a = b a b^{-1}$$ $$\implies$$ $$a \sim b$$, which is a contradiction.
>
>    --- In other words, $$G$$ is abelian $$\difif$$ Every element in $$G$$ forms its own conjugacy class.


#### $$\bluetext{Definition (Group of Inner Automorphisms)}$$

- $$G$$ is a group.

- $$\operatorname{Inn}(G) : = \{\operatorname{f}_g \mid g \in G\}$$

   $$\def$$ **group of inner automorphisms** of $$G$$ $$\defas$$ $$\operatorname{Inn}(G) \difif$$ $$\{f_g \mid f_g \text{ is a conjugation by } g \in G\}$$.

   `Well-definedness:` 
  
   Check the group axioms: `associativity:` Composition is associativity, `identity element:` $$\operatorname(id)$$, `inverse element:` Inver of function.. -- By above 3 properites of automorphisms.

> - `Group of Inner Automorphisms is a subgroup of group of automorphisms:` $$\operatorname{Inn}(G) \leq \Aut{G}$$ -- Since conjugation is an automorphism and apply subgroup criterion.

#### $$\bluetext{Definition (Normal Subgroup)}$$

- $$G$$ is a group.

- $$N$$ $$\leq$$ $$G$$.

   $$\def$$ $$N$$ is a **normal subgroup** of $$G$$ $$\defas$$ $$N \trianglelefteq G$$ $$\difif$$ $$\forall g \in G$$, $$g N g^{-1} = N$$.

   `Well-definedness:` Apply subgroup criterion.

> -  $$N$$ is **stable** under conjugations $$\sim$$ $$N \norsub G$$.
>
> ---
>
> - `Normal subgroup means every element in the subgroup is stable under conjugations.` -- $$N \trianglelefteq G$$ $$\ifif$$ $$\forall g \in G$$ and $$\forall n \in N$$, $$g n g^{-1} \in N$$.
>
> ---
>
> - `Normal subgroup is a union of conjugacy class of G:`
>
>   $$N \norsub G$$ $$\ifif$$ $$\forall g \in G$$, $$Cl(g) \subseteq N$$ or  $$Cl(g) \cap N = \empty$$
>
>    -- `=>:` For any $$g \in G$$, assume there exists $$n \in Cl(g) \cap N$$, then for any $$c \in Cl(g)$$, write $$c = g n g^{-1}$$. Then, by the definition of normality $$c \in N$$.
>
>    -- `<=:` For any $$g \in G$$ and $$n \in N$$, let $$Cl(n)$$ be the conjugacy class of $$n$$, then $$Cl(n) \subseteq N$$. Then, $$gng^{-1} \in Cl(n) \subseteq N$$.
>
>    --- To find normal subgroups: find all conjuacy class $$\rightarrow$$ retain those with order being a factor of $$\abs{G}$$ $$\rightarrow$$ check if they are subgroups(apply subgroup criterion.)

#### $$\bluetext{Definition (Simple Group)}$$

- $$G$$ is a group.

   $$\def$$ $$G$$ is a **simple group** $$\difif$$ $$G \neq \{e\}$$ and $$\forall N \trianglelefteq G$$, $$N = \{e\}$$ or $$N = G$$.

> - `Simple group can not be "factored":` 
> 
>   Like prime number, simple group can not be factored. A group that is not simple can be factored in to two smaller groupsm, namely a nontrivial normal subgroup and the corresponding quotient group, which is introduced as following.

#### $$\bluetext{Definition (Quotient Group)}$$

- $$G$$ is a group.

- $$N$$ $$\trianglelefteq$$ $$G$$.

   $$\def$$ **quotiennt set** of $$G$$ by $$N$$ $$\defas$$ $$G / N$$ $$\defas$$ $$\{g N \mid g \in G\}$$ -- All the left cosets of $$N$$ in $$G$$.

    $$\def$$ **quotient group** of $$G$$ by $$N$$ $$\defas$$ $$G / N$$ with the group operation defined by **multiplication of cosets** $$\defas$$ $$\*$$, where
   
   - $$*$$ $$\defas$$ $$G / N \times G / N \rightarrow G / N$$ $$\defas$$ $$(g N, h N) \mapsto (g h) N$$. -- Well-defined by nomality of $$N$$ and associativity of $$G$$.

   `Well-definedness:` Check the group axioms: `associativity:` Composition is associativity, `identity element:` $$N$$, `inverse element:` $$(g N)^{-1} = g^{-1} N$$. 

> - `Why is it called quotient?:` 
>
>   The reason $$G / N$$ is called a quotient group comes form division of integers. When we divide an integer, we regroup the number of into a certain number of collections with the same number of objects. The quotient group is the same idea, the quotient group structure is used to form a natural "regrouping", which are the cosets of $$N$$ in $$G$$. Like the prime number has only 2 divisor, which are $$1$$ and itself. The simple group only 1 quotient group $$\defas$$ $$\{G \mid G \text{ is a simple} group} "dividied" by its trivial normal subgroup and itself, whose cosets are simple group itself. 
>
> ---
>
> - `The condition normality is required by respectfulness of *:` 
> 
>   Check that $$*$$ respects the quotient structure. (Think about if $$N$$ is not normal). Regardless of whether left or right cosets used in the definition of quotient set, guaranteed by conjugacy criterion.
>
> ---
>
>  - `Quotient space:`
>
>    In linear algebra, we use the same idea to define quotient space for a subspace in a vector space.

#### $$\bluetext{Definition (Cannonical Projection  Homomorphism)}$$

- $$G$$ is a group.

- $$N$$ $$\trianglelefteq$$ $$G$$.

   $$\def$$ a **cannonical projection  Homomorphism** $$\defas$$ $$\phi: G \rightarrow G / N$$ $$\defas$$ $$g \mapsto g N$$.

> - `Cannonical projection homomorphism is a surjective group homomorphism:`
>
>    -- `Surjectivity:` Natural from its definition.
>
>    -- `Homorphism:` Natural from the its own definition and the group operation of quotient group.
>
> ---
>
> - `Every normal subgourp is kernel of some group homomorphism:`
>
>   $$\phi$$ is defined as above $$\imply$$ $$\ke(\phi) = N$$. -- By definition of Kernel and the properties of cosets. 
>
>   -- This means for any $$N \norsub G$$, we can always find a group homorphism with it as its kernel by defining its corresponding cannonical projection homomorphism.
>
> ---
>
> - $$\abs{G / N}$$ $$= \frac{\abs{G}}{\abs{N}}$$ --  By Lagrange's Theorem.  

### $$\bluetext{2.3 First Isomorphism Theorem adn Correspondence Theorem}$$

### $$\bluetext{2.3.1. First Isomorphism Theorem}$$

#### $$\bluetext{Theorem 2.1. First Isomorphism Theorem}$$

- $$G, H$$ are groups.

- $$f: G \to H$$ is a group homomorphism.

   - $$\imply$$ $$\ke{f} \trianglelefteq G$$.

   - $$\imply$$ $$\im(f) \leq H$$.

   - $$\imply$$ $$\exists \psi: G / \ke{f} \rightarrow \im{f}$$ $$\defas$$ $$g \ke{f} \mapsto f(g)$$ is a group isomorphism and $$G / \ke{f} \iso \im{f}$$.
  
   - $$\imply$$ $$\abs{G} = \abs{\ke{f}} \abs{\im{f}}$$.

   `Proof:`

   - `Ker(f) is normal in G:` 
   
      - `Subgroup:` Known result.
   
      - `Normality:` For any $$x \in \ke(f)$$ $$g \in G$$,

      $$
      f(g x g^{-1}) = f(g) f(x) f(g^{-1}) = f(g) e_H f(g^{-1}) = f(g) f(g^{-1}) = f(g g^{-1}) = f(e_G) = e_H
      $$

       Hence, $$g x g^{-1} \in \ke(f)$$. Therefore, $$\ke(f)$$ is a normal subgroup of $$G$$. 

   - `Im(f) is a subgroup of H:` Known result, since $$f$$ is a homomorphism.

   - `The existence of isomomorphism:` 

     - `Well-definess:` $$\psi$$ is well-defined since $$f$$ is constant on each coset of $$\ke(f)$$.

     - `Homomorphism:` For any $$g_1 \ke(f)$$ and $$g_2\ke(f) \in G/\ke(f)$$,

      $$
      \begin{aligned}
      \psi(g_1\ke(f)g_2\ke(f)) &= \phi(g_1g_2\ke(f)) \\
      &= f(g_1g_2) = f(g_1)f(g_2) \\
      &= \psi(g_1\ke(f))\psi(g_2\ke(f))
      \end{aligned}
      $$
     
     - `Bijectivity:`
       
       - `Surjectivity:` Natural from its owm definition.

       - `Injectivity:` $$\ke(\psi) = \{e_{G/\ke(f)}\}$$ $$\imply$$ $$\psi$$ is injective.

           For any $$g \in \ke(\psi)$$,

           $$
           \psi(g) = f(g) = e_H
           $$

           Therefore, $$g \in \ke(f)$$ $$\implies$$ $$g\ke(f) = \ke(f)$$. Hence, $$\ke(\psi) = \{e_G \ke(f)\}$$.

   - `The order of G:` By above, $$\frac{\abs{G}}{\abs{\ke(f)}} = \abs{G/\ke(f)} = \abs{\im(f)}$$.
  
> - In other words, every homomorphic image of a group is isomorphic to a quotient group of the group.
>
> ---
> 
> - $$f$$ is surjective $$\imply$$ $$G/\ke(f) \iso H$$ -- by First Isomorphism Theorem with $$\psi: G/\ke(f) \to H$$ $$\defas$$ $$g \ke(f) \mapsto f(g)$$ $$\forall g \in G$$.
>
> ---
>
> - $$N \norsub G$$ $$\ifif$$ $$\exists f$$ such that $$N = \ke(f)$$ -- by First Isomorphism Theorem with $$\psi: G \to G/N$$ $$\defas$$ $$g \mapsto g N$$ $$\forall g \in G$$. 
>
> ---
> 
> - There are similar theorems for monoids, vector spaces, rings, modules, etc. -- Just replace the group homomorphism with the corresponding homomorphism.

<div  align="center"> 
<img src="\study/Imperial_mathematics/year_2/Groups_and_Rings/Graphs/the_First_isomomorphism_Theorem.jpg?height=288&width=420&top_left_y=596&top_left_x=1357" style="zoom:75%">
</div>
<center style="font-size:14px;color:#C0C0C0;text-decoration:underline">The commutative diagram of the First Isomomorphism Theorem </center>

#### $$\bluetext{Applications of First Isomorphism Theorem}$$

- $$G$$ is a group

   - $$\imply$$ $$G/G \iso \{e\}$$ -- by First Isomorphism Theorem with $$\psi: G/G \to \{e\}$$ $$\defas$$ $$g \mapsto e$$ $$\forall g \in G$$.

   - $$\imply$$ $$G/\{e\} \iso G$$. -- by First Isomorphism Theorem with $$\operatorname{id}:G/\{e\} \to G$$ $$\defas$$ $$g \mapsto g$$ $$\forall g \in G$$.

   - $$\imply$$ $$GL_n(\R)/SL_n(\R) \iso \R^+$$ -- by First Isomorphism Theorem with $$\operatorname{det}: GL_n(\R)/SL_n(\R) \to \R^+$$ $$\defas$$ $$g \mapsto \operatorname{det}(g)$$ $$\forall g \in GL_n(\R)/SL_n(\R)$$.

   - $$\imply$$ $$\Z_n \iso \Z / n \Z$$ -- by First Isomorphism Theorem with $$\psi: \Z \to \Z_n$$ $$\defas$$ $$\m \mapsto g \mod n$$ $$\forall m \in \Z$$.


#### $$\bluetext{Definition (Coorresponding Set Function)}$$

- $$G, H$$ are groups.

- $$f: G \to H$$ is a group homomorphism.

   $$\def$$ corresponding set functions $$\defas$$

   - $$f_{\operatorname{Im}}: \mathcal{P}(G) \rightarrow \mathcal{P}(H)$$ $$\defas$$ $$S \subseteq G \mapsto \{f(s) \mid s \in S\} \subseteq H$$

   - $$f_{\operatorname{Pre}}: \mathcal{P}(H) \rightarrow \mathcal{P}(G)$$ $$\defas$$ $$T \subseteq H \mapsto \{g \in G \mid f(g) \in T\} \subseteq G$$

> - `Group homomorphisms map subgroups to subgroups:`
>
>    - $$\forall S \leq G$$, $$f_{\operatorname{Im}}(S) \leq H$$. -- Apply subgroup criterion.
>
>    - $$\forall S \leq H$$, $$f_{\operatorname{Pre}(S)} \leq G$$. -- Apply subgroup criterion.
>
> ---
>
> - `Surjective group homomorphisms map normal subgroups to normal subgroups:`
>
>    $$f: G \to H$$ is a surjective group homomorphism $$\imply$$ $$\forall N \trianglelefteq G$$, $$f_{\operatorname{Im}}(N) \trianglelefteq H$$. 
>
>    -- `Subgroup:` Known above.
>
>    -- `Normality:` For any $$m \in f_{\operatorname{Im}}(N)$$, we need to show $$h m h^{-1} \in f_{\operatorname{Im}}(N)\; \forall h \in H$$. Write $$m = f(n)$$ for some $$n \in N$$. By surjecitive, we can write every $$h \in H$$ as $$f(g)$$ for some $$g \in G$$. Calculate $$f(g) f(n) f(g)^{-1} = f(g n g^{-1})$$, where $$g n g^{-1} \in N$$ by normality of $$N$$. Hence $$h m h^{-1} \in f_{\operatorname{Im}}(N)$$.
>
>    --- The surjectiviey is necessary, consider $$N = G \leq H$$ with $$f = \operatorname{id}$$.
>
>    $$f: G \to H$$ is a group homomorphism $$\imply$$ $$\forall N \norsub H, f_{\operatorname{Pre}}(N) \norsub G$$. 
>
>    -- `Subgroup:` Known above.
>
>    -- `Normality:` For any $$m \in f_{\operatorname{Pre}}(N)$$, we need to show $$g m g^{-1} \in f_{\operatorname{Pre}}(N) \; \forall g \in G$$. Calculate $$f(g m g^{-1}) = f(g) f(m) f(g)^{-1} \in N$$ since $$f(m) \in N$$ and $$N$$ is normal.


#### $$\bluetext{Theorem 2.2. Correspondence Theorem}$$

- $$G$$ is a group.

- $$N$$ $$\trianglelefteq$$ $$G$$.

- $$\mathcal{N} \defas \{H \mid N \subseteq H \leq G\}$$ -- The set of all subgroups $$S$$ of $$G$$ that contain $$N$$.

- $$\mathcal{Q} \defas \{Q \mid Q \leq G/N\}$$ -- The set of all subgroups of $$G /N$$.

- $$\phi: G \to G/N$$ is a cannonical projection homomorphism $$\defas$$ $$g \mapsto g N$$.

- $$f_{\operatorname{Im}}: \mathcal{P}(G) \rightarrow \mathcal{P}(G/N)$$ is the corresponding set function of $$\phi$$.

   - $$\imply$$ $$\forall S \leq G$$ and $$S \supseteq N$$, $$N \trianglelefteq S$$.

   - $$\imply$$ $$\forall S \leq G$$ and $$N \trianglelefteq S$$, $$f_{\operatorname{Im}}(S) = S/N \leq G/N$$.

   - $$\imply$$ $$f_{\operatorname{Im}}: \mathcal{N} \to \mathcal{Q}$$ is a **bijection** $$\defas$$ $$S \mapsto S/N$$ $$\forall S \in \mathcal{N}$$.

   - $$\imply$$ $$\forall S$$ such that $$N \trianglelefteq S \leq G$$, $$S \trianglelefteq G$$ $$\ifif$$ $$f_{\operatorname{Im}}(S) \trianglelefteq G/N$$.

   `Proof:`

> - In other words, the algebraic structure of the subgroups of $$G / N$$ is in one-to-one correspondence with the algebraic structure of the subgroups of $$G$$ that contain $$N$$.
>
> ---
> 
> - If $$A, B \in \mathcal{N}$$
>
>   - $$\imply$$ $$A \subseteq B$$ $$\ifif$$ $$A/N \subseteq B/N$$.
>
>   - $$\imply$$ If $$A \subseteq B$$, then $$\abs{B : A} = \abs{B/N : A/N}$$, where $$\abs{B : A}$$ is the index of $$A$$ in $$B$$.
>
>   - $$\imply$$ $$(A \cap B) /N =  A/N \cap B/N$$.
>
>   - $$\imply$$ $$A \trianglelefteq G$$ $$\ifif$$ $$A/N \trianglelefteq G/N$$.
>
> ---
>
> - There are similar theorems for rings, vectorr spaces, and algebras. -- Just replace the group homomorphism with the corresponding homomorphism.








