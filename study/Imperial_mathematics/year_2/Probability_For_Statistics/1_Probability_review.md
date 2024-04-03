---
title: 1. Probability Review
layout: simple
---

$$\definecolor{red}{RGB}{208,25,25}$$
$$\definecolor{orange}{RGB}{242,113,28}$$
$$\definecolor{yellow}{RGB}{251,189,8}$$
$$\definecolor{olive}{RGB}{181,204,24}$$
$$\definecolor{green}{RGB}{33,186,69}$$
$$\definecolor{teal}{RGB}{0,181,173}$$
$$\definecolor{blue}{RGB}{33,133,208}$$
$$\definecolor{violet}{RGB}{100,53,201}$$
$$\definecolor{purple}{RGB}{163,51,200}$$
$$\definecolor{pink}{RGB}{224,57,151}$$
$$\definecolor{brown}{RGB}{165,103,63}$$
$$\definecolor{gray}{RGB}{118,118,118}$$
$$\definecolor{black}{RGB}{27,28,29}$$
$$\newcommand{\imply}{\textcolor{blue}{\Rightarrow}}$$
$$\newcommand{\pro}{\textcolor{blue}{\mathcal{Proof:}}}$$
$$\newcommand{\solution}{\textcolor{blue}{\mathcal{Solutions:}}}$$
$$\newcommand{\problem}{\textcolor{blue}{\mathcal{Problem}}}$$
$$\newcommand{\ass}{\textcolor{blue}{\mathbf{Assume}}}$$
$$\gdef\inner#1#2{\langle #1, #2 \rangle}$$
$$\gdef\norm#1{\left\| #1 \right\|}$$
$$\gdef\abs#1{\left| #1 \right|}$$
$$\gdef\set#1{\left\{ #1 \right\}}$$
$$\gdef\bo{\mathcal{B}}$$
$$\textcolor{blue}{\rule{600px}{1.0pt}}$$

#### **based on notes and lectures by [Dr. Ciara Pike-Burke](https://www.ma.imperial.ac.uk/~cpikebur/).**

#### Definition $$\blue{\textit{(Experiment)}}$$ 

An **experiment** is any fixed procedure with a variable outcome.

#### Definition  $$\blue{\textit{(Sample Space)}}$$ 

- There is an experiment with a variable outcome.

- There are associated outcomes with the experiment.

   We say that the set of all possible outcomes is the **sample space** of the experiment. We denote the sample space by $$\Omega$$

#### Definition $$\blue{\textit{(Event)}}$$

- There is a sample space $$\Omega$$.

- There is a subset $$A \subset \Omega$$.

   We say that $$A$$ is an **event**.

#### Definition $$\blue{\textit{(Algebra)}}$$

- $$\F$$ is a set of subsets of $$\Omega$$, which means that $$\F$$ is a set of events that satisfies the following axioms:

   1. $$\varnothing \in \mathcal{F}$$

   2. If $$A \in \mathcal{F}$$, then $$A^{c} \in \mathcal{F}$$.

   3. If $$A, B \in \mathcal{F}$$, then $$A \cup B \in \mathcal{F}$$.

   By induction, 3 implies that $$\F$$ is closed under finite unions, i.e.

   $$
   \text { If } A_{1}, A_{2}, \ldots, A_{n} \in \mathcal{F} \text {, then } \bigcup_{i=1}^{n} A_{i} \in \mathcal{F} \text {. }
   $$

#### Definition $$\blue{\mathit{(\sigma-algebra)}}$$

1. $$\F$$ is a algebra.

2. $$\F$$ is closed under countable unions, i.e.


   $$
   \text { if } A_{1}, A_{2}, \cdots \in \mathcal{F} \text {, then } \bigcup_{i=1}^{\infty} A_{i} \in \mathcal{F} \text {. }
   $$

   then $$\F$$ is said to be a $$\sigma$$-algebra. An element of a $$\sigma$$-algebra $$\F$$ is said to be an **event**.

#### Example 

For any set $$\Omega$$, the simplest $$\sigma$$-algebra is the trival one:

$$
\mathcal{F}_0=\{\varnothing, \Omega\}
$$

For any set $$\Omega$$, the power set of $$\Omega$$ is a $$\sigma$$-algebra, called the **discrete $$\sigma$$-algebra**.

#### Exercise 1.10 

Suppose $$\Omega = \N = \{1, 2, 3, \ldots\}$$ and $$\F = \{A \subset \N \mid A \text { is finite or } A^{c} \text { is finite }\}$$.

1. Identify a subset of $$\Omega$$ that lies in $$\mathcal{F}$$, and a subset that is not in $$\mathcal{F}$$.

2. Show that $$\mathcal{F}$$ is an algebra.

3. Show that $$\mathcal{F}$$ is not a sigma algebra.

> **$$\blue{Remark}$$**
> 
>When we work with uncountable sample spaces, we choose work with a smaller sigma algebra of events than the power set. To consider the impression of measurement, we at least want the open intervals in $$\R$$ to be events. To be previse about the sense in which our choice is smallest, we need the following propostion:

#### Proposition 1.12. $$\blue{\textit{(Intersection of sigma algebras is a sigma algebra)}}$$

- $$\mathcal{F}_{i}, i \in I$$ is a non-empty collection of sigma algebras on a set $$\Omega$$. Then $$\cap_{i \in I} \mathcal{F}_{i}$$ is a sigma algebra.

$$\pro$$:

There are three properties to check.

1. Certainly $$\varnothing, \Omega \in \mathcal{F}_{i}$$ for each $$i \in I$$, so these sets are contained in the intersection.

2. If $$E \in \cap_{i \in I} \mathcal{F}_{i}$$ then for each $$i \in I, E \in \mathcal{F}_{i}$$, so $$E^{c} \in \mathcal{F}_{i} \forall i \in I$$. Hence $$E^{c} \in \cap_{i \in I} \mathcal{F}_{i}$$.

3. If $$E_{1}, E_{2}, \ldots \cap_{i \in I} \mathcal{F}_{i}$$, then for each $$i \in I$$, each set $$E_{j} \in \mathcal{F}_{i}$$, so $$\cup_{j=1}^{\infty} E_{j} \in$$ $$\cap_{i \in I} \mathcal{F}_{i}$$.

Hence $$\cap_{i \in I} \mathcal{F}_{i}$$ is a sigma algebra.

#### Definition 1.13. $$\blue{\mathit{(Borel\; \sigma-algebra)}}$$

Let $$\F_i,i \in I$$ be a collection of all sigma algebras that contain all open intervals of $$\R$$. This collection is clearly non-empty, because the power set of $$\R$$ is such a sigma algebra. By Proposition 1.12, the intersection $$\F=\cap_{i \in I} \F_i$$ is a sigma algebra. The **Borel $$\sigma$$-algebra** is defined as

$$
\mathcal{B}=\bigcap_{i \in I} \mathcal{F}_{i}
$$


> Remark
>
> - $$\bo$$ contains all open intervals along with their complements, contable union and intersection.
>
> - If $$\F$$ is any sigma algebra containing all open interval, then $$\bo \subset \F$$. It follows that $$\bo$$ is the smallest sigma algebra containing all open intervals.
> 
> - Sets in $$\bo$$ are called **Borel sets**.
>
> - We will not attempt to define probabilities for subsets of $$\mathbb{R}$$ that are not in $$\mathcal{B}$$. It is extremely difficult to construct explicitly a set that is not in $$\mathcal{B}$$.

#### Examples 1.15 $$\blue{\textit{(Borel Sets)}}$$

Using the properties of sigma algebras as needed, for $$a, b \in \mathbb{R}$$ and $$n \in \mathbb{N}$$, all sets of the following form are Borel sets.

- $$(a, \infty)=\bigcup_{n=1}^{\infty}(a, n)$$,

- $$[a, b]=((-\infty, a) \cup(b, \infty))^{c}$$,

- $$a=[a, a]$$,

- $$\mathbb{N}=\bigcup_{n=1}^{\infty}\{n\}$$.

#### Definition 1.16 $$\blue{\textit{(Kolmogorov Axioms)}}$$

Given a set $$\Omega$$ and a sigma algebra $$\mathcal{F}$$ on $$\Omega$$, a probability function or probability measure is a function $$\operatorname{Pr}: \mathcal{F} \rightarrow[0,1]$$ such that 

1. $$\operatorname{Pr}(A) \geq 0$$, for all $$A \in \mathcal{F}$$.

2. $$\operatorname{Pr}(\Omega)=1$$.

3. Countable additivity: If $$A_{1}, A_{2}, \ldots \in \mathcal{F}$$ are pairwise disjoint, then $$\operatorname{Pr}\left(\bigcup_{i=1}^{\infty} A_{i}\right)=\sum_{i=1}^{\infty} \operatorname{Pr}\left(A_{i}\right)$$

#### Definition 1.17 $$\blue{\textit{(Probability Space)}}$$

The triple $$(\Omega, \mathcal{F}, \operatorname{Pr}(\cdot))$$, consisting of a sample space $$\Omega$$, a sigma algebra $$\mathcal{F}$$ of subsets of $$\Omega$$ and a probability function $$\operatorname{Pr}(\cdot)$$ on $$\mathcal{F}$$ is called a **probability space**.





