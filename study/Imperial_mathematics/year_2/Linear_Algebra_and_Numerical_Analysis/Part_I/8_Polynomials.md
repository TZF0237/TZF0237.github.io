---
title: 8. Polynomials
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

> For the following, we often use $$f, g$$ to denote $$f(x), g(x) \in \F[x]$$.

### Polynomials

#### Proposition 8.1 `(Euclidean algorithm)`

- $$f, g \in \F[x]$$ with $$\deg(g) \leq 1$$.

    Then, there exists $$q, r \in \F[x]$$ such that

    $$
    f = qg + r
    $$

    where either $$r = 0$$ or $$\deg(r) < \deg(g)$$.

`Proof`: (**By induction on $$\deg(f)$$**)

- `Base case`: For $$\deg(f) = 0$$.

    Then, $$f$$ is a constant polynomial.

    Let $$q = 0$$ and $$r = f$$, then $$f = qg + r$$.

- `Inductive step`: Assume $$\deg(f) \geq 1$$ and the proposition holds for all $$f$$ with $$\deg(f) < n$$ where $$n \geq 1$$.

   Let $$n = \deg(f)$$ and $$m = \deg(g)$$, and we write

   $$
   \begin{aligned}
   f & = a_n x^n + \cdots + a_1 x + a_0\\
   g & = b_m x^m + \cdots + b_1 x + b_0
   \end{aligned}
   $$

    where $$a_n, b_m \neq 0$$. 

    There are two cases which we need to consider:

    - `Case 1`: $$n < m$$.

        Let $$q = 0$$ and $$r = f$$, then $$f = qg + r$$.

    - `Case 2`: $$n \geq m$$.

        Let

        $$
        f_1 = f - \frac{a_n}{b_m} x^{n - m} g
        $$

        Then, $$\deg(f_1) < \deg(f) = n$$. Therefore, by the inductive hypothesis, there exists $$q_1, r_1 \in \F[x]$$ such that

        $$
        f_1 = q_1 g + r_1
        $$

        where either $$r_1 = 0$$ or $$\deg(r_1) < \deg(g)$$. Then, we have

        $$
        \begin{aligned}
        f & = f_1 + \frac{a_n}{b_m} x^{n - m} g\\
        & = q_1 g + r_1 + \frac{a_n}{b_m} x^{n - m} g\\
        & = (q_1 + \frac{a_n}{b_m} x^{n - m}) g + r_1
        \end{aligned}
        $$

        Let $$q = q_1 + \frac{a_n}{b_m} x^{n - m}$$ and $$r = r_1$$, then $$f = qg + r$$. 

        If $$r_1 = 0$$, then $$r = 0$$ and we are done.

        If $$r_1 \neq 0$$, then $$\deg(r_1) < \deg(g)$$, and we have

        $$
        \deg(r) = \deg(r_1) < \deg(g)
        $$

        Therefore, the proposition holds for all $$f, g \in \F[x]$$ with $$\deg(g) \leq 1$$. $$\square$$
    

#### Definition `(Greatest common divisor)`

- $$f, g \in \F[x]$$.

    Then, $$d \in \F[x]$$ is a **greatest common divisor** of $$f$$ and $$g$$ if the following two conditions hold:

    1. `Common divisor`: $$d \mid f$$ and $$d \mid g$$.

    2. `Greatest`: If $$e \in \F[x]$$ and $$e \mid f$$ and $$e \mid g$$, then $$e \mid d$$.

> **Remark**:
>
> - If $$d$$ is the greatest common divisor of $$f$$ and $$g$$, then $$\lambda d \in \F[x]$$ is also the greatest common divisor of $$f$$ and $$g$$ for any $$\lambda \in \F \setminus \set{0}$$.



#### Proposition 8.2 `(The existence of greatest common divisor and its uniqueness up to a scalar multiplication)`

- $$f, g \in \F[x] \setminus \set{0}$$.

    Then, 
    
    1. $$\gcd(f, g)$$ exists.

    2. $$\gcd(f, g)$$ is unique up to **scalar multiplication**.

`Proof`:

Assume $$\deg(f) \geq \deg(g)$$. Then, repeatedly apply the Euclidean algorithm, we have

$$
\begin{aligned}
f & = q g + r_1,\;\deg(r_1) < \deg(g)\\
g & = q_1 r_1 + r_2,\;\deg(r_2) < \deg(r_1)\\
r_1 & = q_2 r_2 + r_3, \;\deg(r_3) < \deg(r_2)\\
& \vdots\\
r_{n - 1} & = q_n r_n + r_{n + 1}, \;\deg(r_{n + 1}) < \deg(r_n)\\
r_n & = q_{n + 1} r_{n + 1} + 0
\end{aligned}
$$

Then, we have

$$
\begin{aligned}
\gcd(f, g) & = \gcd(g, r_1)\\
& = \gcd(r_1, r_2)\\
& = \cdots\\
& = \gcd(r_{n - 1}, r_n)\\
& = \gcd(r_n, r_{n + 1})\\
& = r_{n + 1}
\end{aligned}
$$

Therefore, $$\gcd(f, g)$$ exists and is unique up to scalar multiplication. $$\square$$

#### Definition `(Coprime)`

- $$f, g \in \F[x]$$.

- $$\gcd(f, g) = 1$$.

    Then, we say $$f$$ and $$g$$ are **coprime**.

#### Proposition 8.3 `(The greatest common divisor could be expressed as a linear combination of two polynomials)`

- $$f, g \in \F[x]$$.

- $$d = \gcd(f, g)$$.

    Then, there exists $$r, s \in \F[x]$$ such that

    $$
    d = rf + sg
    $$

`Proof`:

Referring to the [previsou proof](#proposition-82-the-existence-of-greatest-common-divisor-and-its-uniqueness-up-to-a-scalar-multiplication), we have

$$
d = r_{n + 1} = r_{n-1} - q_n r_n
$$

Substite for $$r_n$$ using the previous equation,

$$
d =  r_{n - 1} - q_n (r_{n - 2} - q_{n - 1} r_{n - 1}) = (1 + q_n q_{n - 1}) r_{n - 1} - q_n r_{n - 2}
$$

Then substite for $$r_{n - 1}$$ using the previous equation and so on, we have

$$
\begin{aligned}
d & = (1 + q_n q_{n - 1}) r_{n - 1} - q_n r_{n - 2}\\
& = (1 + q_n q_{n - 1}) r_{n - 3} - [(1 + q_n q_{n - 1})q_{n - 2} + q_n ] r_{n - 2}\\
&\vdots\\
& = rf + sg. \square
\end{aligned}
$$

### Factorization of polynomials

#### Definition `(Monic polynomial)`

- $$f(x) \in \F[x]$$.

    Then, $$f(x)$$ is **monic** if the **leading coefficient** of $$f(x)$$ is $$1$$.

#### Definition `(Irreducible polynomial)`

- $$p(x) \in \F[x]$$.

    Then, we say $$p(x)$$ is **irreducible** if

    1. $$\deg(p) \geq 1$$.

    2. $$p(x)$$ cannot be expressed as a product of two polynomials in $$\F[x]$$ with degree less than $$\deg(p)$$.

> **Remark**:
>
> - The irreduciblity of a polynomial depends on the field $$\F$$. For example $$x^2 + 1 \in \R[x]$$ is irreducible but $$x^2 + 1 \in \C[x]$$ is reducible.
>
> - Every polynomial in $$\C[x]$$ of degree at least $$1$$ has a root in $$\C$$ by the Fundamental Theorem of Algebra. Therefore, the only irreducible polynomials in $$\C[x]$$ are the linear polynomials: $$ax + b$$ where $$a, b \in \C$$.

#### Proposition 8.4 `(The roots of a polynomial in rational number field with the integer coefficients are integers and could be factorized into a product of linear factors which are monic with integer coefficients)`

- $$p(x) \in \Q[x]$$ is a **monic polynomial** with **integer coefficients**.

    Then, 

    1. If $$\alpha \in \Q$$ is a root of $$p(x)$$, then $$\alpha \in \Z$$.

    2. If $$p(x)$$ is reducible over $$\Q$$, then it has a factorization

        $$
        p(x) = a b
        $$

        where $$a(x), b(x)$$ are also **monic polynomials with integer coefficients**.

`Proof`: (To be finished later)

#### Proposition 8.5 `(If an irreducible polynomials divides a polynomial then it could divide at least one of the factors of the polynomial)`

- $$p \in \F[x]$$ is an **irreducible polynomial**.

- $$a, b \in \F[x]$$.

- $$p \mid a b$$.

    Then, 
    
    $$
    \text{either } p \mid a\text{ or } p\mid b
    $$

`Proof`:

Suppose $$p \mid a b$$ but $$p \nmid a$$. Since $$p$$ is irreducible, we have $$\gcd(p, a) = 1$$. Therefore, by the [Proposition 8.2](#proposition-82-the-existence-of-greatest-common-divisor-and-its-uniqueness-up-to-a-scalar-multiplication), there exists $$r, s \in \F[x]$$ such that

$$
\tag{Fish}
1 = rp + sa
$$

We multiply bosh sides of (Fish) by $$b$$ and get

$$
\tag{Tiger}
b = rpb + sab
$$

Since $$p \mid ab$$, then it could divide $$rpb$$ and $$sab$$. Therefore, it could divide $$b$$ by (Tiger). Therefore, $$p \mid b$$. $$\square$$

#### Corollary 8.6 `(Extension of the proposition 8.5)`

- $$p \in \F[x]$$ is an **irreducible polynomial**.

- $$g_1, \dots, g_r \in \F[x]$$.

- $$p \mid g_1 \cdots g_r$$.

    Then, 

    $$
    p \mid g_i \text{ for some } i \in \set{1, \dots, r}
    $$

`Proof`: By apply induction on $$r$$, using the [Proposition 8.5](#proposition-85-if-an-irreducible-polynomials-divides-a-polynomial-then-it-could-divide-at-least-one-of-the-factors-of-the-polynomial). $$\square$$

#### Theorem 8.7 `(Unique Factorization Theorem)`

- $$f(x) \in \F[x]$$ with $$\deg(f) \geq 1$$.

    Then,

    1. `Factorization`: $$f$$ could be factorized into a product:

        $$
        f(x) = p_1(x) \cdots p_r(x)
        $$

        where each $$p_i \in \F[x]$$ is **irreducible**.

    2. `Uniqueness`: The factorization is **unique** apart from multiplying factors by scalars.
   
`Proof`: (**By induction on $$\deg(f)$$**)

- `Proof of 1. Factorization`:


    - `Base case`: For $$\deg(f) = 1$$.

        Then, $$f$$ is irreducible, obviously.

    - `Inductive step`: Let $$n = \deg(f)$$ and assume the theorem holds for all $$f$$ with $$\deg(f) < n$$ where $$n \geq 2$$. 

        - `Case 1`: $$f$$ is irreducible.

            Take $$p_1 = f$$ and $$r = 1$$, then $$f = p_1$$ and $$p_1$$ is irreducible.

        - `Case 2`: $$f$$ is reducible.

            Then, there exists $$a, b \in \F[x]$$ such that

            $$
            f = ab
            $$

            where $$\deg(a), \deg(b) < \deg(f) = n$$. Therefore, by the inductive hypothesis, $$a$$ and $$b$$ are both products of irreducible polynomials. Therefore, $$f$$ is also a product of irreducible polynomials. $$\square$$

- `Proof of 2. uniqueness`: **(By contradiction and induction on $$\deg(f)$$)**

    Assume that the factorization is not unique. Then, there exists two factorizations:

    - `Base case`: For $$\deg(f) = 1$$.

        Then, $$f$$ is irreducible. Therefore, the factorization is unique. 

    - `Inductive step`: Let $$n = \deg(f)$$ and assume the uniqueness holds for all $$f$$ with $$\deg(f) < n$$ where $$n \geq 2$$. 


        $$
        \tag{Panda}
        f = p_1 \cdots p_r = q_1 \cdots q_s
        $$

        where $$p_i, q_j$$ are irreducible polynomials for all $$i, j$$.

        Then, 

        $$
        p_1 \mid q_1 \cdots q_s
        $$

        Therefore, by [Corollary 8.6](#corollary-86-extension-of-the-proposition-85), $$p_1 \mid q_i$$ for some $$i$$. Just relabel $$q_i$$ as $$q_1$$. Hence,

        $$
        q_1 = b q_1
        $$

        for some $$b \in \F[x]$$. Since $$q_1$$ is irreducible, then $$b$$ is just a scalar. If we replace $$q_1$$ by $$b^{-1} q_1$$ and $$q_2$$ by $$b q_2$$, then we have

        $$
        \tag{Fox}
        p_1 = q_1 
        $$

        Then, we could cancel $$p_1$$ and $$q_1$$ from $$\text{(Panda)}$$ and get

        $$
        p_2 \cdots p_r = q_2 \cdots q_s
        $$

        Then, by the inductive hypothesis, we have $$r = s$$ and $$p_i = q_i$$ for all $$i \geq 2$$ by relabeling, up to a scalar multiplication of factors. Therefore, 

        $$
        f = p_1 \cdots p_r = q_1 \cdots q_s
        $$

        where $$r = s$$ and $$p_i = q_i$$ for all $$i$$ (up to a scalar multiplication of factors). $$\square$$

#### Definition `(Least common multiple)`

- $$f, g \in \F[x]$$.

    Then, we say $$h \in \F[x]$$ is a **least common multiple** of $$f$$ and $$g$$ if the following two conditions hold:

    1. `Common multiple`: $$f \mid h$$ and $$g \mid h$$.

    2. `Least`: If $$f \mid h'$$ and $$g \mid h'$$, then $$h \mid h'$$.


