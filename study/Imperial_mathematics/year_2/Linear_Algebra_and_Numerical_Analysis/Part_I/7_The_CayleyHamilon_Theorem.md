---
title: 7. The Cayley-Hamilton Theorem
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
$$\gdef\span{\operatorname{Span}}$$

#### Definition (Companion matrix)

- $$p(x)=x^{n}+a_{n-1} x^{n-1}+\cdots+a_{0} \in \F[x]$$. 
  
  Then, the companion matrix of $$p(x)$$ is the $$n \times n$$ matrix $$C$$ defined by

  $$
  C=\left(\begin{array}{ccccc}
  0 & 0 & \cdots & 0 & -a_{0} \\
  1 & 0 & \cdots & 0 & -a_{1} \\
  0 & 1 & \cdots & 0 & -a_{2} \\
  \vdots & \vdots & \ddots & \vdots & \vdots \\
  0 & 0 & \cdots & 1 & -a_{n-1}
  \end{array}\right)
  $$

#### Theorem `(The Cayley-Hamilton Theorem)`

- $$V$$ is finite-dimensional vector space over a field $$\F$$

- $$T: V \rightarrow V$$ be a linear map with characteristic polynomial $$c(x)$$. 
  
  Then 
  
  $$
  c(T)=0
  $$

  $$0$$ is the **zero map**.

`Proof`: (**By induction** on $$\di V$$)

Assume $$T: V \rightarrow V$$ is a linear map with characteristic polynomial $$c(x)$$ and $$\di V = n$$.

- `Base case`: $$n = 1$$, it is trivial.

- `Inductive hypothesis`: Assume the theorem is true for all linear maps $$T: V \rightarrow V$$  with the dimension at most $$n-1$$.

  - `Case A: with the invariant subspace`:

    Assume there is $$T$$-invariant subspace of $$V$$, which is $$W$$, such that $$W \neq 0$$ or $$V$$. Assume $$\di W = r$$ and $$\di V/W = s$$.
   
    - `Construct a matrix of linear map`:
     
      By the proposition in [Direct Sum](./6_Direct_Sum.md). If we choose a basis $$B_W$$ of $$W$$ and extend it to a basis $$B$$ of $$V$$, then we could write the matrix of $$T$$ with respect to $$B$$ as

      $$
      A=\begin{pmatrix}
      X & Z \\
      0 & Y
      \end{pmatrix}
      $$

      where $$X = [T_w]_{B_W}, Y = [\overline{T}]_\overline{B}$$.
  
      (Where $$\overline{T}: V/W \rightarrow V/W$$ is the quotienet map

      $$
      \overline{T}(W + v) = W + T(v)
      $$

      and $$\overline{B}$$ is a basis of $$V/W$$.)

    - `Construct a characteristic polynomial of linear map`:

      Then, the characteristic polynomial of $$T$$ is

      $$
      \tag{Dog}
      c(x)=c_T(x) = c_{X}(x) c_Y(x)
      $$

      where $$c_X(x)$$ is the characteristic polynomial of $$X$$ and $$c_Y(x)$$ is the characteristic polynomial of $$Y$$.

    - `Apply the inductive hypothesis`:

      Now since $$\di W = r < n$$ and $$\di V/W = s < n$$, by the inductive hypothesis, we have

      $$
      c_X(X)=0, \quad c_Y(Y)=0
      $$

      where $$0$$ is the zero matrix.

      If we let 
      
      $$
      A = [T]_B = \begin{pmatrix}
      X & Z \\
      0 & Y
      \end{pmatrix}
      $$

      Then, the characteristic polynomial $$c(x)$$ if $$A$$, if we substitute $$A$$ into $$c(x)$$, we have

      $$
      \begin{aligned}
      c(A) = c_X(X) c_Y(Y) & \overset{\text{(Dog)}} = \begin{pmatrix}
      c_X(X) & Z \\
      0 & c_Y(Y)
      \end{pmatrix} \begin{pmatrix}
      c_Y(Y) & Z' \\
      0 & c_Y(Y)
      \end{pmatrix} \\ & = \begin{pmatrix}
      0 & Z'\\
      0 & c_X(Y)
      \end{pmatrix} \begin{pmatrix}
      c_Y(X) & Z' \\
      0 & 0
      \end{pmatrix} \\
      & = \begin{pmatrix}
      0 & 0 \\
      0 & 0
      \end{pmatrix}
      \end{aligned}
      $$
  - `Case B: without the invariant subspace`:

    Assume there is no $$T$$-invariant subspace of $$V$$ other than $$0$$ and $$V$$. We claim that

    - `Claim`: 
      
      - Let $$v \in V$$ and $$v \neq 0$$.

      - Define 
         
        $$
        \tag{Cameo}
        B = \set{v, T(v), \dots, T^{n-1}(v)}
        $$

        We claim $$B$$ is a basis of $$V$$
      
    - `Proof of the claim`:

      Since $$\di V = n$$, we only need to show that **$$B$$ is linearly independent**.

      - `Proof of B is linearly independent`:

        Assume $$j$$ is the largest integer such that the set

        $$
        S = \set{v, T(v), \dots, T^{j-1}(v)}
        $$

        is linearly independent. Since $$v \neq 0$$ and we have $$j \geq 1$$, it is obviously that $$j \leq n$$. Let $$X$$ be the span of $$S$$. 

        $$
        X = \span{S}
        $$

        Then $$\di X = j$$.

        - `X is T-invariant`:

          Since $$j$$ is the largest integer such that $$S$$ is linearly independent, therefore, the set

          $$
          S' = \set{v, T(v), \dots, T^{j}(v)}
          $$

          is linearly dependent. Hence, $$T^{j}(v) \in \span{S} = X$$. 
          
          If we apply $$T$$ to every vector $$s$$ in $$S$$, we still have $$T(s) \in X$$. Therefore, $$T(X) \subseteq X$$, which means $$X$$ is $$T$$-invariant. 
          
          By the assumption of Case B, we have $$X = 0$$ or $$X = V$$. Since $$v \in X$$, we have $$X \neq 0$$. Therefore, 
          
          $$
          X = \span{S} = \span{v, T(v), \dots, T^{j-1}(v)} = V
          $$

          Hence, $$j = n$$ and $$B$$ is a basis of $$V$$.

      - `Construct the matrix of linear map`:

        The basis $$B$$ is in the form of (Cameo). Since $$T^n(v) = \span(B)$$, we could write

        $$
        \tag{Star}
        T^n(v) = -a_0 v - a_1 T(v) - \cdots - a_{n-1} T^{n-1}(v)
        $$

        where $$a_i \in \F$$ for all $$i \in \set{0, \dots, n-1}$$.

        Then, we could write the matrix of $$T$$ with respect to $$B$$ as

        $$
        A = [T]_B = \begin{pmatrix}
        0 & 0 & \cdots & 0 & -a_0 \\
        1 & 0 & \cdots & 0 & -a_1 \\
        0 & 1 & \cdots & 0 & -a_2 \\
        \vdots & \vdots & \ddots & \vdots & \vdots \\
        0 & 0 & \cdots & 1 & -a_{n-1}
        \end{pmatrix}
        $$

        where $$a_i \in \F$$ for all $$i \in \set{0, \dots, n-1}$$.

      - `Construct a characteristic polynomial of linear map`:

        Then, the characteristic polynomial of $$T$$ is

        $$
        c(x) = c_T(x) = \det(xI - A) = x^n + a_{n-1} x^{n-1} + \cdots + a_0
        $$

        where $$a_i \in \F$$ for all $$i \in \set{0, \dots, n-1}$$. Hence by $$(\text{Star})$$, we have

        $$
        c(T)(v) = T^n(v) + a_{n-1} T^{n-1}(v) + \cdots + a_0 v = 0
        $$

        This is true for all $$v \in V$$. Hence, $$c(T) = 0$$. $$\square$$


#### Corollary `(The matrix version of the Cayley-Hamilton Theorem)`

- $$A$$ is an matrix over a field $$\F$$ with the characteristic polynomial $$c(x)$$,
 
  Then, 
  
  $$
  c(A)=0
  $$
  
  $$0$$ is the zero matrix.

`Proof`:

Since $$A$$ is a matrix, we could view $$A$$ as a linear map $$T: \F^n \rightarrow \F^n$$.

Then, by the Cayley-Hamilton Theorem, we have

$$
c(T) = c(A) = 0 \quad \square
$$



