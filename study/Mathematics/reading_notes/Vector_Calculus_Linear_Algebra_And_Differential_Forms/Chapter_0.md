---
layout: simple
title: Chapter 0 Preliminaries
---

$$\gdef\rr{\mathbb{R}}$$
$$\gdef\cc{\mathbb{C}}$$
$$\gdef\zz{\mathbb{Z}}$$
$$\gdef\nn{\mathbb{N}}$$
$$\gdef\qq{\mathbb{Q}}$$
$$\gdef\vv{\vec{\mathbb{v}}}$$
$$\gdef\vw{\vec{\mathbb{w}}}$$
$$\gdef\vx{\vec{\mathbb{x}}}$$
$$\gdef\vy{\vec{\mathbb{y}}}$$
### 0.1 Reading mathematics

#### Sum and product notations

$$
c_{i,j} = \sum_{k=1}^{n}a_{i,k}b_{k,j} = a_{i,1}b_{1,j}+\ldots +a_{i,n}b{n,j}.
$$

$$
\sum_{i=1}^n \sum_{j=1}^m (a_i+b_j) = \sum_{i=1}^n (\sum_{j=1}^m(a_i+b_j)).
$$

$$
\prod_{i=1}^n a_i = a_1 \cdot a_2 \cdot a_3 \cdot \cdot \cdot a_n.
$$

### 0.4 Functions

#### Functions, inverse, image

##### Definition 0.4.1 (Functions as rule)

A function consists of three things, called the domain and the codomain, and a rule that associates to any element in the domain exactly one element in the codomain.

##### Definition 0.4.3 (Set theoretic definition of function).

A function $$f: X \to Y$$ is a sunset $$\Gamma_f \subset X \times Y$$ having the property that for ever $$x\in X$$, there exists a unique $$y \in Y$$ such that $$(x,y) \in \Gamma_f$$.

##### Definition 0.4.4 (Natural domain)

The natural domain of a function to consist of those arguments for which a computer does not return an error message.

##### Definition 0.4.5 (Onto or surjective)

A function $$f:X \to Y$$  is *onto* (or *surjective*) if for every $$y \in Y$$ there exists $$x \in X$$ such that $$f(x) = y$$.
Thus $$f$$ is onto if every element of the set of arrival (the codomain $$Y$$) corresponds to *at least one* element of the set of departure (the domain $$X$$).

##### Definition 0.4.6 (One to one or injective)

A function $$f:X \to Y$$ is *one to one* (or *injective*) if for every $$y \in Y$$ there is at most one $$x \in X$$ such that $$f(x) = y$$.
Thus $$f$$ is one to one if every element of the set of arrival corresponds to *at most one* element of the set of departure. 

##### Definition 0.4.7 (Invertible)

A mapping $$f$$ is *invertible* (or *bijective*) if it is both onto and one to one. The inverse function of $$f$$ is denoted by $$f^{-1}$$.

##### Definition 0.4.9 (Inverse image)

Let $$f: X\to Y$$ be a function, and let $$C \subset Y$$ be a subset of the codomain of $$f$$. Then the *inverse image* of $$C$$ under $$f$$, denoted $$f^{-1}(C)$$, consists of those elements $$\mathbf{x} \in X$$ such that $$f(\mathbf{x}) \in C$$.
Note that if $$f$$ is not invertible, we could still speak of the inverse image of a set under $$f$$.

##### Proposition 0.4.11 (Inverse image of intersection, union)

- The inverse image of an intersection equals the intersection of the inverse images:
  
$$ 
f^{-1}(A \cap B) = f^{-1}(A) \cup f^{-1}B.
$$

- The inverse image of a union equals the union of the inverse images:

$$
f^{-1}(A \cup B) = f^{-1}(A) \cup f^{-1}(B).
$$

`Proof`:
Suppose we have a

$$
	f:X \to Y
$$
  
And let $$A \in Y$$  and $$B \in Y$$. Assume $$A$$ and $$B$$ are joint. We assume $$x  \in f^{-1}(A \cap B)$$ be arbitrary. Then $$f(x) \in A \cap B$$ by the definition of inverse image. Thus, $$f(x) \in A$$ and $$f(x) \in B$$ by the definition of intersection. Therefore, $$x \in f^{-1}(A)$$ and $$x \in f^{-1}(B)$$ by the definition of the inverse image. Thus, we have $$x \in f^{-1}(A) \cap f^{-1}(B)$$. Then,

$$
  f^{-1}(A\cap B) \subset f^{-1}(A) \cap f^{-1}(B).
$$

We suppose $$x \in f^{-1}(A) \cap f^{-1}(B)$$ be arbitrary. Then, $$x \in f^{-1}(A)$$ and $$x \in f^{-1}(B)$$.Therefore, $$f(x)  \in A$$ and $$f(x) \in B$$. By the definition of intersection, $$f(x) \in A \cap B$$, which implies that $$x \in f^{-1}(A \cap B)$$. Then,

$$ 
 f^{-1}(A) \cap f^{-1}(B) \subset f^{-1}(A \cap B).
$$

We could conclude that

$$
f^{-1}(A \cap B) = f^{-1}(A) \cap f^{-1}(B).
$$

The proof of the other is similar.

#### Composition of mappings

##### Definition 0.4.12 (Composition).

If $$f: C \to D$$ and $$g:A \to B$$ are two mappings with $$B \subset C$$, then the *composition* $$(f \circ g) : A \to D$$ is the mapping give by

$$
 (f \circ g)(x) = f(g(x)).
$$

Note that to make sense the composition, the codomain of $$g$$ must be contained in the domain of $$f$$.

##### Proposition 0.4.15 (Composition is associative)

Composition is associative:

$$
 (f \circ g) \circ h = f \circ (g \circ h).
$$

The proof is straightforward.

##### Proposition 0.4.16 (Composition of onto functions).

Let the functions $$f: B \to C$$ and $$g: A \to B$$ be onto. Then the composition $$(f \circ g)$$ is onto.
`Proof`:
Since

$$
 (f\circ g): A \to C.
$$

 by the definition of composition. Let $$z \in C$$ be arbitrary. Since $$g$$ is onto, then there exists a  $$y\in B$$ such that  $$f(y) = z$$. Also, since $$f$$ is onto, then there exists a $$x \in A$$ such that $$g(x) = y$$. We conclude all these,

$$
 f(g(x)) = f(y) = z.
$$

Therefore, for an arbitrary $$z \in C$$, there exists a $$x \in A$$ such that $$(f\circ g)(x)=z$$ .Therefore, $$(f\circ g)$$ is onto by the definition of onto.

##### Proposition 0.4.17 (Composition of one to one functions)

Let $$f:B \to C$$ and $$g: A \to B$$ be one to one. Then the composition $$(f\circ g)$$ is one to one.
`Proof`:
    We prove this by contradiction. Assume $$(f\circ g)$$ is not one to one. Therefore, for $$z \in C$$, there exist $$x_1 \in A$$, $$x_1 \in B$$ such that $$f(g(x_1)) = f(g(x_2)) = z$$ and $$x_1 \neq x_2$$. Since  $$g$$ is one to one, $$g(x_1) \neq g(x_2)$$ by the definition of one to one and $$z = f(g(x_1)) \neq f(g(x_2)) = z$$ since $$f$$ is one to one which is a contradiction since the equivalence relation is reflexive.

### 0.5 Real numbers

#### Least upper bound

##### Definition 0.5.1 (Upper bound; least upper bound)

A number $$a$$ is an *upper bound* for a subset $$X \subset \mathbb{R}$$ if for every $$x \in X$$, we have $$x \leq a$$. A *least upper bound* is an upper bound $$b$$ such that for any other upper bound $$a$$, we have $$b \leq a$$. The least upper bound, also known as the *supremum*, is denoted by $$\sup X$$.

##### Definition 0.5.2 (Lower bound; greatest lower bound)

A number $$a$$ is a *lower bound* for a subset $$X \subset \mathbb{R}$$ if for every $$x \in X$$, we have $$x \geq a$$. A *greatest lower bound* is a lower bound $$b$$ such that for any other lower bound $$a$$, we have $$b \geq a$$. The greatest lower bound, also known as the *infimum*, is denoted by $$\inf X$$.

##### Axiom 0.5.3 (Completeness axiom)

Every nonempty subset $$X \subset \mathbb{R}$$ that has an upper bound has a least upper bound $$\sup X$$. Similarly, every nonempty subset $$X \subset \mathbb{R}$$ that has a lower bound has a greatest lower bound $$\inf X$$.

#### Proving  concergence

##### Theorem 0.5.7 (Monotone convergence theorem)

A nondecreasing sequence $$a_n$$ converges if and only if it is bounded above.

`Proof`:
 "$$\Rightarrow$$": If a sequence $$a_n$$ converges then it is clearly bounded.
 "$$\Leftarrow$$": Since $$\{ a_n\} \in \mathbb{R}$$ and it is bounded above. Then, there exists a supremum $$\sup \{a_n\}$$, denoted by $$A$$. We claim that $$\lim_{n \to \infty} = A$$. Fix $$\epsilon > 0$$. Since $$A$$ is the supremum, then $$A - \epsilon$$ is not an upper bound. Therefore, there exists a $$N \in \mathbb{N}$$ such that $$A - \epsilon < a_N$$. Since $$a_n$$ is nondecreasing, then for all $$n \geq N$$, we have $$A - \epsilon < a_N \leq a_n \leq A$$. Therefore, $$|a_n - A| < \epsilon$$ for all $$n \geq N$$. Thus, $$\lim_{n \to \infty} = A$$.

##### Theorem 0.5.8 (Absolute convergence implies convergence)

If $$a_n$$ is a series such that the series of absolute values

$$
\sum_{n=1}^{\infty} |a_n| \text { converges, then so does the series}	\sum_{n=1}^{\infty} a_n.
$$

`Proof`:
  Let us consider the series

$$
  \sum_{n=1}^{\infty} a_n + |a_n| 
$$
  
which is a series of nonnegative terms. Therefore, the series $$b_n = \sum_{n=1}^{\infty} a_n + |a_n|$$ is nondecreasing. Since the series $$\sum_{n=1}^{\infty} |a_n|$$ converges, then the series $$b_n$$ is bounded above. Therefore, by the monotone convergence theorem, the series $$b_n$$ converges. Since $$b_n$$ converges, then the series $$\sum_{n=1}^{\infty} a_n$$ converges.

#### The intermediate value theorem

##### Theorem 0.5.9 (Intermediate value theorem)\

If $$f: [a,b] \to \mathbb{R}$$ is a continuous function such that $$f(a) \leq 0$$ and $$f(b) \geq 0$$, then there exists a number $$c \in [a,b]$$ such that $$f(c) = 0$$.

`Proof`:

Let $$X$$ be a set of $$x \in [a,b]$$ such that $$f(x)\leq 0$$. Since $$X \subset \mathbb{R}$$ and it is bounded. Therefore, there exists a supremum $$\sup X$$, denoted by $$c$$. We claim that $$f(c) = 0$$. We prove this by contradiction. Assume $$f(c) \neq 0$$. Since $$f$$ is continuous, then for every $$\epsilon > 0$$, there exists a $$\delta > 0$$ such that $$|x-c| < \delta$$ implies $$|f(x) - f(c)| < \epsilon$$. Since $$f(c) \neq 0$$, then $$|f(c)| > 0$$. Therefore, there exists a $$\delta > 0$$ such that $$|x-c| < \delta$$ implies $$|f(x) - f(c)| < |f(c)|$$. Since $$f(c) \leq 0$$, then $$f(x) < 0$$ for all $$x \in (c-\delta, c+\delta)$$. Therefore, $$c$$ is not the supremum of $$X$$ which is a contradiction. Therefore, $$f(c) = 0$$.

#### Excises for section 0.5

##### Excise 0.5.1 

Show that if $$p(x)$$ is a polynomial of odd degree with real coefficients, then there exists a real number $$c$$ such that $$p(c) = 0$$.


`Proof`:
  - Since $$p(x)$$ is a polynomial, $$p(x)$$ is continous in $$\mathbb{R}$$. 
  - Without loss of generality, we assume that the leading coefficient of $$p(x)$$ is 1. Then, we could write $$p(x)$$ as

$$
p(x) = x^n + a_{n-1}x^{n-1} + \ldots + a_1x + a_0.
$$

Let

$$
A = |a_0| + |a_1| + \ldots + |a_{n-1}| + 1
$$

Then,

$$
p(A) = A^n + a_{n-1}A^{n-1} + \ldots + a_1A + a_0 \geq A^n - |a_{n-1}|A^{n-1} - \ldots - |a_1|A - |a_0| = A^n - (|a_{n-1}|A^{n-1} + \ldots + |a_1|A + |a_0|) \geq A^n - (|a_{n-1}|A^{n-1} + \ldots + |a_1|A^{n-1} + |a_0|A^{n-1}) = A^n - A^{n-1}(|a_{n-1}| + \ldots + |a_1| + |a_0|) = A^n - A^{n-1}(A-1) = A^n - 1 \geq 0
$$

Similarly,

$$ 
p(-A) \leq 0
$$

By the intermediate value theorem, there exists a $$c \in [-A, A]$$ such that $$p(c) = 0$$.



##### Excise 0.5.1 

- a. Show that the function

$$
f(x) =
\begin{cases}\sin \frac{1}{x} & x \neq 0 \\ 0 & x = 0 \end{cases}
$$

  is not continous.

- b. Show that $$f$$ satisfies the intermediate value theorem.



`Proof`:

- a. We prove this by contradiction. Assume $$f$$ is continous at $$0$$. Then, for every $$\epsilon > 0$$, there exists a $$\delta > 0$$ such that $$|x| < \delta$$ implies $$|f(x) - f(0)| < \epsilon$$. Let $$\epsilon = \frac{1}{2}$$. Then, there exists a $$\delta_0 > 0$$ such that if $$|x| < \delta_0$$, then $$|f(x)| < \frac{1}{2}$$. Let $$x = \frac{2}{\pi(2n+1)}$$ for some $$n \in \mathbb{N}$$. Then, $$|x| < \delta_0$$ if $$n$$ is large enough and $$|f(x) = |\sin (\frac{\pi (2n+1)}{2})| = 1$$. Therefore, $$|f(x)| = 1 < \frac{1}{2}$$ which is a contradiction. Therefore, $$f$$ is not continous at $$0$$. Notice that $$f(x)$$ is continous at $$x \neq 0$$ since it is a composition of continous functions.
  
- b. Firstly, we consider $$f^{-1}(a)\neq 0$$. Assume $$0\leq a_1 \leq a_2 \leq 1$$ without loss of generality. Let

$$
a_1 \leq a \leq a_2
$$

   Let $$A$$ be the set of of $$x \in \mathbb{R}$$ such that $$f(x) \leq a$$. Note that $$f(x)$$ is not empty since $$f^{-1}(a_1)$$ is in it. By the completeness axiom, $$A$$ has a supremum, denoted by $$c$$. We claim that $$f(c) = a$$. We prove this by contradiction. Assume $$f(c) \neq a$$, Since $$f(x)$$ is continous at $$x = c$$. Then, for every $$\epsilon > 0$$, there exists a $$\delta > 0$$ such that $$|x-c| < \delta$$ implies $$|f(x) - f(c)| < \epsilon$$. Since $$f(c) \neq a$$, then $$|f(c) - a| > 0$$. Therefore, there exists a $$\delta > 0$$ such that $$|x-c| < \delta$$ implies $$|f(x) - f(c)| < |f(c) - a|$$. Since $$f(c) \leq a$$, then $$f(x) < a$$ for all $$x \in (c-\delta, c+\delta)$$. Therefore, $$c$$ is not the supremum of $$A$$ which is a contradiction. Therefore, $$f(c) = a$$.

  Next we consider $$f^{-1}(a) = 0$$. Since $$f(0) = 0$$, if $$a = 0$$, then $$f^{-1}(a) = 0$$. 



##### Excise 0.5.3
 
Suppose $$a \leq b$$. Show that if $$f:[a,b] \to [a,b]$$ is contionous, there exists a $$c \in [a,b]$$ such that $$f(c) = c$$.



`Proof`:

If $$f(a) = a$$ and $$f(b) = b$$, then by the intermediate value theorem, we are down. If $$f(a) \neq a$$ and $$f(b) \neq b$$, then we consider the function $$g(x) = f(x) - x$$. Since $$f$$ is continous, then $$g$$ is continous. Since $$g(a) = f(a) - a \geq 0$$ and $$g(b) = f(b) - b \leq 0$$. Then, by the intermediate value theorem, there exists a $$c \in [a,b]$$ such that $$g(c) = 0$$. Therefore, $$f(c) = c$$.



##### Excise 0.5.4

Let

$$
a_n = \frac{(-1)^{n+1}}{n}.
$$

for $$ n = 1,2,3,\ldots$$. 

- a. Show that $$\sum a_n$$ converges.

- b. Show that $$\sum a_n = \ln 2$$.


`Proof`:

- a. Alternating Test or if we want to do it from the first principle, we could prove it is Cauthy. 
- b. We consider the following function series:
  
   $$
    f(x) = \sum_{n=1}^{\infty} \frac{x^{n+1}}{n}
    $$

    Then, $$f'(x) = \sum_{n=1}^{\infty} x^n = \frac{1}{1-x}$$. Therefore, $$f(x) = -\ln (1-x) + C$$. Since $$f(0) = 0$$, then $$C = 0$$. Therefore, $$f(1) = \sum_{n=1}^{\infty} \frac{1}{n} = \ln 2$$.



### 0.6 Infinite Sets

#### Existence of transcendental numbers

##### Definition (Algebraic number)

An **algebraic number** is a number that is a root of a non-zero polynomial with integer coefficients.

##### Definition (Transcendental number)

A **transcendental number** is a number that is not an algebraic number.

##### Rremark

The set of algebraic numbers is countable. The set of transcendental numbers is uncountable.

#### Other consequences of different cardinalities

##### Definition

Two sets $$A$$ and $$B$$ have the same **cardinality** (denoted by $$A \asymp B$$) if there exists a bijection $$f: A \to B$$.  

##### Definition (Countable set)

A set $$A$$ is **countable** if $$ A \asymp \mathbb{N}$$. 

##### Definition (Continuum)

A set $$A$$ has *the cardinality of the continuum* if $$A \asymp \mathbb{R}$$.

We say that the cardinality of a set $$A$$ is at most that of $$B$$ (denoted by $$A \preceq B$$) if there exists an injection $$f: A \to B$$.

##### Definition (Power Set)

The *power set $$\mathcal{P}(A)$$* of a set $$A$$ is the set of all subsets of $$A$$.

##### Remark

Clearly for any set $$E$$ there exists a one-to-one map $$f: E \to \mathcal{P}(E)$$, namely the map $$f(x) = \{x\}$$. Therefore, $$E \preceq \mathcal{P}(E)$$. In fact, it is strictly less. If $$E$$ has $$n$$ elements, then $$\mathcal{P}(E)$$ has $$2^n$$ elements.

##### Proposition 0.6.1

A mapping $$f: E \to \mathcal{P}(E)$$ is never surjective or onto for any set $$E$$.



Let $$A \subset E$$ be the set of $$x$$ such that $$x  \notin f(x)$$. i.e. $$A = \{x| x \notin f(x), x \in E\}$$. We will show that $$A$$ is not in the image of $$f$$. Assmue $$A$$ is in the image of $$f$$. Then, $$A = f(y)$$ for some $$y \in E$$. Then, there are two cases:

- If $$y \in A$$, then $$y \notin f(y) = A$$ but $$ A = f(y)$$which is a contradiction.
- If $$y \notin A$$, then $$y \in f(y) = A$$ but $$y \notin A$$ which is a contradiction.

Therefore, $$A$$ is not in the image of $$f$$.



#### The continuum hypothesis

##### Definition (Continuum hypothesis)

The **continuum hypothesis** is the statement that there is no set whose cardinality is strictly between that of the integers and the real numbers.

##### Remark

Cantor think that the continuum hypothesis is true and spent a lot of time trying to prove it. However, this statement has been shown to be unsolvable; it is consistent with the axioms of set theory to assume it is true (Godel, 1940) and also to assume it is false (Cohen, 1963). This means that if there is a contradiction in set theory assuming the continuum hypothesis, then there is a contradiction in set theory without assuming the continuum hypothesis. If there is a contradiction in set theory assuming the continuum hypothesis is false, then there is a contradiction in set theory without assuming the continuum hypothesis is false.

#### Excises for section 0.6

##### Excise 0.6.5

Let $$f: A \to B$$ and $$g : B \to A$$ be one to one (injective). We will sketch how to construct a mapping $$h: A \to B$$ that is bijective.

Let an $$(f,g)$$-chain be e sequence made up alternately by elements of $$A$$ and $$B$$, with the element following an element $$a \in A$$ being $$f(a) \in B$$, and the element following an element $$b\in B$$ being $$g(b) \in A$$.

a. Show that every $$(f,g)$$-chain can be uniquely continued forever to the right, and to the left can

1. either be uniquely continued forever, or
2. can be continued to an element of $$A$$ that is not in the images of g, or
3. can be continued to an element of $$B$$ that is not in the images of f.

b. Show that every element of $$A$$ and every element of $$B$$ is an element of a unique such maximal $$(f,g)$$-chain.

c. Construct $$h : A \to B$$ by setting

$$
h(a) = \begin{cases}
f(a) \quad \text{a belongs to a maximal chain of type 1 or 2 }\\
g^{-1}(a) \quad \text{if a belongs to a maximal chain of type 3}
\end{cases}
$$

Show that $$h : A \to B$$ is well defined and bijective.

d. Take $$A = [-1,1]$$ and $$B = (-1,1)$$. It is surprisingly difficult to write a mapping $$h : A \to B$$ that is bijective. Take $$f: A \to B$$ defined by $$f(x) = \frac{x}{2}$$, and $$g : B \to A$$ defined by $$g(x) = x$$.

- What elements of $$[-1,1]$$ belong to chain of type 1, 2, 3?
- What map $$h : [-1,1] \to (-1,1)$$ does the construction in part c give?


**Solutions:**

a. To the right, if $$a \in A$$ is an element of a chain, then it can be continued :

$$
a, f(a), g(f(a)), f(g(f(a))), \cdots,
$$

this is the only contiuations. If $$b \in B$$ is an element of a chain, then it can be continued:

$$
b, g(b), f(g(b)), g(f(g(b))), \cdots,
$$

this is the only contiuations.

Fot other cases, let $$A_1 = g(B)$$ and $$B_1 = f(A)$$. Let

$$
f_1 : A_1 \to B
$$

be the unique map such that

$$
f_1(g(b)) = b \quad \forall b \in B.
$$

and let 

$$
g_1 : B_1 \to A
$$ 

be the unique map such that

$$
g_1(f(a)) = a \quad \forall a \in A.
$$

To the left, if $$a \in A_1$$ is an element of a chain, then we can extend to

$$
f_1(a),a .
$$

Then, if $$f_1(a) \in B_1$$, then we can extend it further, to $$g_1(f_1(a))$$. This could extend forever

$$
\cdot \cdot \cdot, g_1(f_1(a)), f_1(g_1(f_1(a))), g_1(f_1(g_1(f_1(a)))), \cdot \cdot \cdot
$$

Either this will continous forever or at some point we will run into an element of $$A$$ that is not in $$A_1$$ or into an element of $$B$$ that is not in $$B_1$$. Then, the chain will end there.


b. It is obvious that every element of $$A$$ and every element of $$B$$ is an element of a unique infinite chain to the right and of a unique finite or infinite chain to the left.

c. Firstly, we show it is well-defined. The definition of a well-defined function is that if $$a_1 = a_2$$, then $$h(a_1) = h(a_2)$$. Let $$a_1 = a_2$$. Then, $$a_1$$ and $$a_2$$ are in the same chain. Then, $$h(a_1) = h(a_2)$$. Therefore, $$h$$ is well-defined.

Secondly, we show that $$h$$ is one to one. The definition of one to one is that if $$h(a_1) = h(a_2)$$, then $$a_1 = a_2$$. Let $$h(a_1) = h(a_2)$$. Asssume $$a_1$$ belongs to a maximal chain of type 1 or 2, so does $$f(a_1)$$, hence so does $$f(a_2)$$ by the definition of $$h$$. Since $$f$$ is one to one, $$a_1 = a_2$$. Assume $$a_1$$ belongs to a maximal chain of type 3. Then, $$a_1$$ is not the first element of the chain. Therefore, $$a_1 \in A_1$$ and $$h(a_1) = f_1(a_1)$$, so $$h(a_1) = g^{-1}(a_1) = f_1(a_1)$$ by the definition of $$f_1$$. The element $$h(a_2)$$ is a part of the same chain since $$g$$ is one to one. Hence also of type $$3$$. Then, $$h(a_2) = g^{-1}(a_2) = f_1(a_2)$$. Since $$f_1$$ is one to one, $$a_1 = a_2$$. Therefore, $$h$$ is one to one. Therefore, h is one to one.

Thirdly, we show that $$h$$ is onto. The definition of onto is that for every $$b \in B$$, there exists $$a \in A$$ such that $$h(a) = b$$. Let $$b$$ belongs to a maximal chain. If this chain is of type $$1$$ and $$2$$, then $$b$$ is not the first element of the chain., so $$b \in B_1$$ and $$h(g_1(b)) = f(g_1(b)) = b$$. So $$b$$ is in the image of $$h$$. If $$b$$ is in a chain of type $$3$$, then $$b = f_1(g(b)) =h(g(b))$$, so $$b$$ still in the image of $$h$$. Therefore, $$h$$ is onto.

Therefore, $$h$$ is well-defined, one to one and onto. Therefore, $$h$$ is bijective.

d. In this case, there is only one chain of type $$1$$, the chain of all $$0$$'s. There are only two chains of type $$2$$, which are

$$
+1 \to +\frac{1}{2} \to +\frac{1}{4} \to +\frac{1}{8} \to \cdots
$$

$$
-1 \to -\frac{1}{2} \to -\frac{1}{4} \to -\frac{1}{8} \to \cdots
$$

All other chains are of type $$3$$, and end to the left with a number in $$(\frac{1}{2},1)$$ or in $$(-1,-\frac{1}{2})$$, which are the points in $$B - f(A) $$. Such a sequence might be 

$$
\frac{3}{4} \stackrel{g}{\to} \frac{3}{4} \stackrel{f}{\to} \frac{3}{8} \cdots
$$

By the construction in part c, we see that

$$
h(x) = \begin{cases}
0 & \text{if } x = 0 \\
\frac{1}{x} & \text{if } x = \pm\frac{1}{2^k} \text{ for } k \in \mathbb{N}\\
& x \text{if } x = \pm\frac{1}{2^k} \text{ for } k \in \mathbb{N} \text{ and } x \neq \pm\frac{1}{2^k} \text{ for } k \in \mathbb{N} \\
\end{cases}
$$

##### Remark

The above construction is called the **Bernstein's Theorem**. It states that if there exist a one to one function from $$A$$ to $$B$$ and a one to one function from $$B$$ to $$A$$, then there exists a bijection from $$A$$ to $$B$$.


### 0.7 Complex Numbers

#### Arithmetic in $$\mathbb{C}$$

Let $$z_1, z_2 z_3 \in mathbb{C}$$. Then the following hold:

1. $$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$$ (associative law for addition)
2. $$z_1 + z_2 = z_2 + z_1$$ (commutative law for addition)
3. z_1 + 0 = z_1 (additive identity)
4. $$z_1 + (-z_1) = 0$$ (additive inverse)
5. $$(z_1 \cdot z_2) \cdot z_3 = z_1 \cdot (z_2 \cdot z_3)$$ (associative law for multiplication)
6. $$z_1 \cdot z_2 = z_2 \cdot z_1$$ (commutative law for multiplication)
7. $$z_1 \cdot 1 = z_1$$ (multiplicative identity)
8. $$z_1 \cdot \frac{1}{z_1} = 1$$ (multiplicative inverse)
9. $$z_1 \cdot (z_2 + z_3) = z_1 \cdot z_2 + z_1 \cdot z_3$$ (distributive law)

#### The complex conjugate

##### Definition 0.7.2. (Complex conjugate)

The *complex conjugate* of the complex number $$z = a + bi$$ is the complex number $$\bar{z} = a - bi$$.

Complex conjugation preserves all of the arithmetic operations:

1. $$\overline{z_1 + z_2} = \bar{z_1} + \bar{z_2}$$
2. $$\overline{z_1 \cdot z_2} = \bar{z_1} \cdot \bar{z_2}$$

##### Remark

For any complex number $$z$$, we have

$$
Im(z) = \frac{z - \bar{z}}{2i}
$$

$$
Re(z) = \frac{z + \bar{z}}{2}
$$

##### Definition 0.7.3 (Modulus of complex number)

The *modulus* of a complex number $$z = a + bi$$ is the nonnegative real number

$$
|z| = |a+bi| = \sqrt{z \bar{z}} = \sqrt{a^2 + b^2}
$$

#### Complex number in polar coordinates

Let $$z = a + bi \neq 0$$ be a complex number. Then the point $$\begin{pmatrix} a \\ b \end{pmatrix}$$ can be represented in polar coordinates as

$$
\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} r \cos \theta \\ r \sin \theta \end{pmatrix}
$$

where $$r = |z|$$ and $$\theta$$ is the angle between the positive real axis and the line segment from the origin to the point $$\begin{pmatrix} a \\ b \end{pmatrix}$$.

so that

$$
z = a + bi = r \cos \theta + r \sin \theta i = r(\cos \theta + \sin \theta i)
$$

##### Definition 0.7.4 (Argument of a complex number)

The polar angle $$\theta$$ is called the *argument* of the complex number $$z$$ and is denoted by $$\theta = arg(z)$$.

##### Proposition 0.7.5(Geoemtric representation of complex multiplication)

The modulus of the product of two complex numbers is the product of their moduli,

$$
|z_1 z_2| = |z_1| |z_2|
$$

The polar angle of the product is the sum of the polar angles $$\theta_1$$ and $$\theta_2$$ of the two complex numbers,

$$
arg(z_1 z_2) = arg(z_1) + arg(z_2)
$$

$$
(r_1 \cos \theta_1 + r_1 \sin \theta_1 i)(r_2 \cos \theta_2 + r_2 \sin \theta_2 i) = r_1 r_2 (\cos(\theta_1 + \theta_2) + \sin(\theta_1 + \theta_2) i)
$$

**Proof:**

Multiplying the two complex numbers and apply the addtion rules of trigonometry.

#####  0.7.6 Corollary (De Moivre's formula)

If $$z = r(\cos \theta + \sin \theta i)$$, then

$$
z^n = r^n(\cos n\theta + \sin n\theta i)
$$

**Proof:**

The proof is straightforward by induction of the proposition above.

##### 0.7.7 Corollary (Roots of a complex number)

Every complex number $$z = r(\cos \theta +i \sin \theta )$$ with $$r \neq 0$$ has $$n$$ distinct complex $$n$$th roots, which are the numbers,

$$
r^{\frac{1}{n}}(\cos \frac{\theta + 2k\pi}{n} + \sin \frac{\theta + 2k\pi}{n} i)
$$

where $$k = 0, 1, \cdots, n-1$$.

**Proof:**

The proof is very easy to check.