---
title: Differentiation in higher dimensions
layout: simple
---

>*In the classcal teaching of Calculus, this idea is immediately obscured by the accidental fact that, on a one-dimensional vector space, there is a one-to-one correspondence between linear forms and numbers, and therefore the derivative at a point is defined as a number instead of a linear form. This slavish subservience to the shibboleth of numerical interpretation at any cost becomes worse...*
>
><p align="right">--J. Dieudonné, Foundations of Modern Analysis, 1960</p>

based on the notes and lectures by [Dr. Davoud Cheraghi](https://www.ma.imperial.ac.uk/~dcheragh/)

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\inner#1#2{\langle #1, #2 \rangle}$$
$$\gdef\norm#1{\left\| #1 \right\|}$$
$$\gdef\abs#1{\left| #1 \right|}$$
$$\gdef\set#1{\left\{ #1 \right\}}$$

## 1.1 Euclidean spaces

### 1.1.1 Preliminaries from Analysis I

Throughout these notes, we frequently use the standard notations for the set of natural numbers

$$
\N = \{1,2,3,\dots\},
$$

the set of integers

$$
\Z = \{\dots,-2,-1,0,1,2,\dots\},
$$

the set of rational numbers

$$
\mathbb{Q}=\{p / q \mid p \in \mathbb{Z}, q \in \mathbb{Z} \backslash\{0\}\},
$$

and the set of real numbers $$\R$$. The set of real numbers is obtained as the *completion* of the set of $$\Q$$.

On $$\R$$, we have a notation of ordering $$\leq$$, so that we say whether a real number is greater than, less than or equal to another. Moreover, $$\R$$ satisfied the **completeness axiom**, that is, if $$A \subset \mathbb{R}$$ is non-empty and bounded above, then $$A$$ has a least upperbound. The standard notation for the least upper bound of $$A$$ is $$\sup (A)$$. 

An important function defined on all real numbers is the modulus function, defined as

$$
\abs{x}:= \begin{cases}x & x \geq 0 \\ -x & x<0 .\end{cases}
$$

This function has the following properties:

- (i) For all $$x \in \R$$, we have $$\abs{x} \geq 0$$, with $$\abs{x}=0$$ if and only if $$x=0$$.

- (ii) For all $$x$$ and $$y$$ in $$\R$$, $$\abs{xy} = \abs{x} \abs{y}$$.
  
- (iii) For all $$x$$ and $$y$$ in $$\R$$, we have

$$
\abs{x+y} \leq\abs{x}+\abs{y}
$$

The third property in the above list is called the triangle inequality for the modulus function.

### 1.1.2 Euclidean space of dimension $$n$$

We first give the definition of the Euclidean space of dimension $$n$$.

#### Definition (Euclidean space of dimension $$n$$)

For $$n \leq 1$$, the **$$n$$-dimensional Euclidean space**, denoted by $$\R^n$$, is defined as the set of ordered $$n$$-tuples $$(x^1, x^2,\dots,x^n)$$ where each $$x^i \in \R$$ for $$i = 1,2,\dots,n$$. Each such $$n$$-tuple is denoted by a single letter $$x = (x^1, x^2,\dots,x^n)$$ and will be referrred to as a point in $$\R^n$$. The entries $$x^i$$ are called the **coordinates** of $$x$$.

We may see each element of $$\R^n$$ as a colume vector with $$n$$ real components. For convenience, we use the notation $$x_1, x_2,\in \R^n$$ are two different vectors, while $$x^1, x^2,\in \R^n$$ are the components of the one vector $$x \in \R^n$$.

Like the vectors we learn in linear algebra, we can define the addition and scalar multiplication of vectors in $$\R^n$$ as follows, for example if $$x$$ and $$y$$ are elements of $$\R^n$$ with

$$
x = (x^1, x^2,\dots,x^n),\quad y = (y^1, y^2,\dots,y^n),
$$

then we define

$$
x+y := (x^1+y^1, x^2+y^2,\dots,x^n+y^n),
$$

and for $$\lambda \in \R$$, we define

$$
\lambda x := (\lambda x^1, \lambda x^2,\dots,\lambda x^n).
$$

With these definitions, we could check that $$\R^n$$ is a vector space over $$\R$$.


#### Definition (Inner product)

The **inner product**

$$
\inner{\cdot}{\cdot}:\R^n\times\R^n\to\R
$$

is defined as

$$
\inner{x}{y} := \sum_{i=1}^n x^i y^i = x^1 y^1 + x^2 y^2 + \dots + x^n y^n.
$$

Then we could use the inner product to define the **length** or **norm** function

#### Definition (Norm)

The **norm** or **length** function

$$
\norm{\cdot}:\R^n\to[0,\infty)
$$

as 

$$
\norm{x} := \sqrt{\inner{x}{x}} = \inner{x}{x}^{\frac{1}{2}}
$$

Note that the inner product of two vectors is a real number, not a vector.

The norm function on $$\R^n$$ has the following properties:

- (i) For all $$x \in \R^n$$, we have $$\norm{x} \geq 0$$, with $$\norm{x}=0$$ if and only if $$x=0$$.
  
- (ii) For all $$x \in \R^n$$ and $$\lambda \in \R$$, we have $$\norm{\lambda x} = \abs{\lambda} \norm{x}$$.
  
- (iii) For all $$x,y \in \R^n$$, we have 

  $$
  \norm{x+y} \leq \norm{x} + \norm{y}
  $$

The third property in the above list is called the **triangle inequality** for the norm function.

#### Remark 1.1

There is an important relation between $$\norm{x}$$, and $$\abs{x^i}$$ for the entries of $$x$$.

$$
\min_{k = 1, 2,\dots,n} \abs{x^k} \leq \abs{x^k} \leq \norm{x} \leq \sqrt{n}\max_{k = 1, 2,\dots,n} \abs{x^k}.
$$

**Proof.** (In problem sheet 1)

The properties that the norm function satisfies could be used in an abstract fashion to define more general normed vector spaces. The norm gives us a useful notion of distance between two points in $$\R^n$$.

### 1.1.3 Convergence of sequences in Euclidean spaces

#### Definition (Convergence of sequences)

A sequence $$(x_i)_{i=0}^{\infty}$$ with $$x_i \in \R^n$$ converges to the vector $$x \in \R^n$$ if the following holds: For every $$\epsilon > 0$$, there exists $$N \in \N$$ such that for all $$i \geq N$$, we have $$\norm{x_i - x} < \epsilon$$. We then write:

$$
x_{i} \rightarrow x, \quad \text { as } i \rightarrow \infty,
$$

or

$$
\lim _{i \rightarrow \infty} x_{i}=x
$$

#### Proposition 1.1.

The sequence of vectors $$(x_i)_{i=0}^{\infty}$$ with $$x_i \in \R^n$$ converges to the vector $$x \in \R^n$$ if and only if each component of $$x_i$$ converges to the corresponding compoent of $$x$$. That is, if we write:

$$
x_i = (x_i^1, x_i^2,\dots,x_i^n),\quad x = (x^1, x^2,\dots,x^n),
$$

then, $$x_i \to x$$ as $$i \to \infty$$ if and only if for all $$k = 1, 2,\dots,n$$, we have $$x_i^k \to x^k$$ as $$i \to \infty$$.

**Proof.**




