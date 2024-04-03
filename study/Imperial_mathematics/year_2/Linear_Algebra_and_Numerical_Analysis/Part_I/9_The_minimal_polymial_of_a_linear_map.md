---
title: 9. The minimal polynomial of a linear map
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
$$\newcommand{\iimply}{\textcolor{gray}{\Leftarrow}}$$
$$\newcommand{\pro}{\textcolor{orange}{\mathcal{Proof:}}}$$

> For the following, we often use $$f, g$$ to denote $$f(x), g(x) \in \F[x]$$.

#### $$\blue{\textsf{Definition (Minimal polynomial)}}$$

- $$T: V \to V$$ is a linear map.
  
- $$m(x) \in \F[x]$$ is a polynomial.

    If the three following conditions holds:

    1. `T is a root of m(T)`: $$m(T) = 0$$.

    2. `Monic`: $$m(x)$$ is [monic](https://en.wikipedia.org/wiki/Monic_polynomial)

    3. `Minimal`: $$\deg(m(x))$$ is as small as possible when 1 and 2 holds.

    Then $$m(x)$$ is called the **minimal polynomial** of $$T$$.

> **Remark**:
>
> For matrix, the definition of the minimal polynomial is the same as the definition of the minimal polynomial of a linear map just by replacing $$T$$ with $$A$$.


#### $$\blue{\textsf{Proposition 9.1 (Uniqueness and divisibility of minimal polynomial)}}$$

- $$T: V \to V$$ is a linear map.

  Then,

  1. `Existence`: $$T$$ has a minimal polynomial.
   
  2. `Uniquness`: The minimal polynomial of $$T$$ is unique, denoted by $$m_T(x)$$. i.e. if $$p(x)$$ is another minimal polynomial of $$T$$, then $$p(x) = m_T(x)$$.
  
  3. `Divisibility`: For $$p(x) \in \F[x]$$, 
       
      $$
      p(T) = 0 \iif m_T(x) \mid p(x)
      $$

$$\textcolor{orange}{\mathcal{Proof:}}$$

1. `Existence`: 

    By [the Cayley-Hamilton Theorem](https://en.wikipedia.org/wiki/Cayley%E2%80%93Hamilton_theorem), there exists a polynomial (the characteristic polynomial) $$c(x)$$ such that $$c(T) = 0$$. If we divide $$c(x)$$ by its leading coefficient, we get a monic polynomial $$m(x)$$ such that $$m(T) = 0$$. If we could not find another monic polynomial $$p(x)$$ such that $$p(T) = 0$$ and $$\deg(p(x)) < \deg(m(x))$$, then $$m(x)$$ is the minimal polynomial of $$T$$.

2. `Uniquness`: (Prove by $$\red{\textbf{contradiction}})$$

    Assume there exists $$m{(x)}$$ and $$m_1(x)$$ satisfying the conditions of the minimal polynomial of $$T$$. Then, 

    - $$m(T) = 0$$ and $$m_1(T) = 0$$.

    - $$m(x)$$ and $$m_1(x)$$ are monic.

    - $$\deg(m(x)) = \deg(m_1(x))$$.
  
    Then, $$\deg(m(x) - m_1(x)) < \deg(m(x))$$ and $$(m(x) - m_1(x))(T) = 0$$. This contradicts the minimality of $$m(x)$$. Therefore, $$m(x) = m_1(x)$$.

3. `Divisibility`: 
     
    - $$\implies$$: Assume $$p(x) \in \F[x]$$ and $$p(T) = 0$$, by the [Eucilidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), there exists $$q(x), r(x) \in \F[x]$$ such that 

      $$
      p(x) = q(x) m_T(x) + r(x)
      $$

      and either $$r(x) = 0$$ or $$\deg(r(x)) < \deg(m_T(x))$$. Then, by the assumption that we have,

      $$
      p(T) = q(T)m_T(T) + r(T) = 0
      $$

      by the definition of the [minimal polynomial](#definition-the-minimal-polynomial). Since $$m_T(T) = 0$$, we have $$r(T) = 0$$. Then, we have

      $$
      r(x) = 0 \implies p(x) = q(x) m_T(x) \implies m_T(x) \mid p(x)
      $$

      - $$\iimply$$: Assume $$m_T(x) \mid p(x)$$, then for $$p(x) \in \F[x]$$, we have

      $$
      m_T(x) \mid p(x) \implies p(x) = m_T(x) q(x) \text{ for some } q(x) \in \F[x]
      $$
        
      Then, by the conditions of the [minimal polynomial](#definition-the-minimal-polynomial), we have

      $$
      p(T) = m_T(T) q(T) = 0  \quad \square
      $$


####  $$\blue{\textsf{Proposition 9.2 (The minimal polynomial divides the characteristic polynomial and share the same roots)}}$$

- $$T: V \to V$$ is a linear map.

- $$c_T(x)$$ is the characteristic polynomial of $$T$$.

- $$m_T(x)$$ is the [minimal polynomial](#definition-the-minimal-polynomial) of $$T$$.

  Then,

  1. `Minimal polynomial divides characteristic polynomial`: $$m_T(x) \mid c_T(x)$$.
  
  2. `Minimal polynomial and characteristic polynomials share the same roots`: If $$\lambda \in \F$$ and $$c_T(\lambda) = 0$$, then $$m_T(\lambda) = 0$$.

$$\textcolor{orange}{\mathcal{Proof:}}$$

1. `Divides characteristic polynomial`: 

    It is following from the [Proposition 9.1](#proposition-9.1-the-minimal-polynomial-divides-the-characteristic-polynomial) and [the Cayley-Hamilton Theorem](https://en.wikipedia.org/wiki/Cayley%E2%80%93Hamilton_theorem).

2. `Shares the same roots`: 

    Assume $$v$$ is an eigenvector of $$T$$ with respect to $$\lambda$$, i.e.

    $$
    T(v) = \lambda v
    $$

    Then, by the definition of the [minimal polynomial](#definition-the-minimal-polynomial), we have

    $$
    m_T(T)(v) = 0 \implies m_T(T)(v) = m_T(\lambda)(v) = 0
    $$

    Hence, $$m_T(\lambda) = 0$$. $$\square$$

> $$\gray{\mathcal{Remark:}}$$
>
>> - For a diagonalizable matrix $$A$$ with the characteristic polynomial 
>>     $$
c(x) = \prod_{i=1}^n (x - \lambda_i)^{a_i}
$$
>>
>>   where $$\lambda_i$$ are distinct diagonal entries of $$A$$ and $$a_i$$ are the multiplicity of $$\lambda_i$$. Then, the minimal polynomial of $$A$$ is
>> 
>> $$
m(x) = \prod_{i=1}^n (x - \lambda_i)
$$
>>
>>   a product of distinct linear factors of $$c(x)$$.
>> 
>> $$\textcolor{orange}{\mathcal{Proof:}}$$ (Question on  Problem Sheet 4)
>
>> - The minimal polynomial of a **companion matrix** is the characteristic polynomial of the companion matrix. (Question on  Problem Sheet 4)


#### $$\blue{\textsf{Proposition 9.3 (Relations between with T-invariant subspaces and quotient maps)}}$$

- $$T: V \to V$$ is a linear map.

- $$T_W: W \to W$$, with the restriction of $$T$$ to $$W$$.

- $$\overline{T}: V / \F[w] \to V / \F[w]$$ is the quotient map of $$T$$ with respect to $$w \in V$$.


  Then,

  1. `The charactersitic polynomial of T is the product of the charactersitic polynomials of restriction and quotient maps`: 
  
    $$
    c_T(x) = c_{T_W}(x) c_{\overline{T}}(x)
    $$
  
  2. `The minimal polynomial of restriction map divides the minimal polynomial of T, and the same for quotient map`: 
  
    $$
    m_{T_W}(x) \mid m_T(x) \textit{ and } m_{\overline{T}}(x) \mid m_T(x)
    $$


$$\textcolor{orange}{\mathcal{Proof:}}$$

1. `The charactersitic polynomial of T is the product of the charactersitic polynomials of restriction and quotient maps`: 

    In the [Proposition 8.3](../8_Diagonalization/8_Diagonalization.md#proposition-8.3-the-characteristic-polynomial-of-a-block-diagonal-matrix-is-the-product-of-the-characteristic-polynomials-of-the-blocks).

2. `The minimal polynomial of restriction map divides the minimal polynomial of T, and the same for quotient map`: 

    Assume $$w \in W$$ be arbitrary, by the definition of the [minimal polynomial](#definition--minimal-polynomial), we have

    $$
    m_{T_W}(T_W) = 0 \text{ and } m_T(T)(w) = 0
    $$

    then, for $$v \in V$$,

    $$
    m_T(\overline{T})(W + v) = W + m_T(T)(v) = W + 0 = W
    $$

    Hence, $$m_T(T_W) = 0$$ and $$m_T(\overline{T}) = 0$$. Then, by [3 in Proposition 9.1](#proposition-9.1-the-minimal-polynomial-divides-the-characteristic-polynomial), we have 

    $$
    m_{T_W}(x) \mid m_T(x) \textit{ and } m_{\overline{T}}(x) \mid m_T(x) \quad \square
    $$

#### $$\blue{\textsf{Theorem 9.4}}$$    $$\blue{\mathsf{(An \; irreducible \; factor \; of \; c_T(x) \; divides \; m_T(x))}}$$

- $$T: V \to V$$ is a linear map.

- $$p(x) \in \F[x]$$ is an [irreducible factor](https://en.wikipedia.org/wiki/Irreducible_polynomial) of $$c_T(x)$$.

  Then, $$p(x) \mid m_T(x)$$.

$$\textcolor{orange}{\mathcal{Proof:}}$$ (Prove by $$\red{\textbf{induction}}$$ on $$\dim V$$ and the approach is similar to the proof of [the Cayley-Hamilton Theorem](.../7_Characteristic_Polynomials_and_the_Cayley-Hamilton_Theorem/7_Characteristic_Polynomials_and_the_Cayley-Hamilton_Theorem.md#theorem-7.1))

Assume there is a linear map $$T: V \to V$$ and $$p(x) \in \F[x]$$ is an irreducible factor of $$c_T(x)$$.

- `Base case`: $$\dim V = 1$$.

    Then, $$T$$ is a scalar map. Hence, $$c_T(x) = x - \lambda$$ and $$m_T(x) = x - \lambda$$. Then, $$p(x) = x - \lambda$$ and $$p(x) \mid m_T(x)$$.

- `Inductive step`: Assume $$\dim V > 1$$ and the theorem holds for all linear maps with dimension less than $$\dim V$$.

   - `Case 1`: There exists a $$T$$-invariant subspace $$W$$ that is not equal to $$V$$ or $$0$$.

      Then, by the [Proposition 9.3](#proposition-9.3-relations-between-with-t-invariant-subspaces-and-quotient-maps), we have

      $$
      c_T(x) = c_{T_W}(x) c_{\overline{T}}(x)
      $$

      By [Proposition 8.5](.../8_Diagonalization/8_Diagonalization.md#proposition-8.5-the-characteristic-polynomial-of-a-block-diagonal-matrix-is-the-product-of-the-characteristic-polynomials-of-the-blocks), 

      $$
      p(x) \mid c_{T_W}(x) \text{ or } p(x) \mid c_{\overline{T}}(x)
      $$

      Since $$\dim W < \dim V$$ and $$\dim V / W < \dim V$$, by the inductive hypothesis, we have

      $$
      p(x) \mid m_{T_W}(x) \text{ or } p(x) \mid m_{\overline{T}}(x)
      $$

      Then, by [Proposition 9.3](#proposition-9.3-relations-between-with-t-invariant-subspaces-and-quotient-maps), we have

      $$
      p(x) \mid m_T(x)
      $$

    - `Case 2`: $$V$$ has no $$T$$-invariant subspaces apart from $$0$$ and $$V$$. 

      Assume there exits a non-zero vector $$v \in V$$ and we define a set $$B$$ as follows:

      $$
      B = \set{v, T(v), T^2(v), \dots, T^{n-1}(v)}
      $$

      where $$n = \dim V$$. Then, by [proof of the Cayley-Hamilton Theorem](.../7_Characteristic_Polynomials_and_the_Cayley-Hamilton_Theorem/7_Characteristic_Polynomials_and_the_Cayley-Hamilton_Theorem.md#theorem-7.1), $$B$$ is a basis of $$V$$. and

      $$
      [T]_B = C(c_T(x))
      $$

      where $$C(c_T(x))$$ is the [companion matrix](.../8_Diagonalization/8_Diagonalization.md#definition-companion-matrix) of $$c_T(x)$$. From the previous remark, we know that the minimal polynomial of a companion matrix is the characteristic polynomial of the companion matrix. Hence, 

      $$
      m_T(x) = c_T(x)
      $$

      Then, by assumption, $$p(x) \mid c_T(x)$$, it follows that $$p(x) \mid m_T(x)$$. $$\square$$


