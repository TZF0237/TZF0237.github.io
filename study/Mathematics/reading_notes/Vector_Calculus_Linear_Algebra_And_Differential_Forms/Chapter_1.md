---
layout: simple
title: Chapter 1 Vector, Matrices, and Derivatives
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
$$\gdef\va{\vec{\mathbb{a}}}$$
$$\gdef\vb{\vec{\mathbb{b}}}$$
$$\gdef\vc{\vec{\mathbb{c}}}$$
$$\gdef\bx{\mathbb{x}}$$
$$\gdef\by{\mathbb{y}}$$
$$\gdef\bz{\mathbb{z}}$$
$$\gdef\ba{\mathbb{a}}$$
$$\gdef\bb{\mathbb{b}}$$
$$\gdef\bc{\mathbb{c}}$$
$$\gdef\bf{\mathbb{f}}$$
$$\gdef\bg{\mathbb{g}}$$

### 1.1 Introducing the actors: points and vectors

#### Points and vectors: Positional data versus incremental data

##### Definition 1.1.1 (Points, vectors, and coordinates)

The element of $$\mathbb{R}^n$$ with coordinates $$x_1, \cdots, x_n$$ can be interpreted as the *point*

$$
\mathbf{x} = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}
$$

or, as the *vector*

$$
\vec{\mathbf{x}} = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}
$$

which represents an increment.

#### Subtraction and addition of points and vectors

Vectors are added by adding the corresponding coordinates:

$$
\vec{\mathbf{x}} + \vec{\mathbf{y}} = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} + \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}
$$

The result is a vector. Similarly, vectors are subtracted by subtracting the corresponding coordinates.

#### Multiplying vectors by scalars

Multiplication of a vector by a *scalar* is straightforward:

$$
\lambda \vec{\mathbf{x}} = \lambda \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}
$$

#### Subsets and subspace of $$\mathbb{R}^n$$

##### Definition 1.1.5 (Subspace of $$\mathbb{R}^n$$)

A nonempty subset $V \subset \mathbb{R}^n$ is a *subspace* if it is closed under addition and scalar multiplication by scalars; that is, $$V$$ is a subspace if when

$$
\vec{\mathbf{x}}, \vec{\mathbf{y}} \in V \text{ then } \vec{\mathbf{x}} + \vec{\mathbf{y}} \in V \text{ and } \lambda \vec{\mathbf{x}} \in V
$$

##### Remark

Roughly, a subspace is a flat subset that goes through the origin.

##### Example

What is the subsapace of $$\mathbb{R}^2$$? There are exactly treee kinds: line through the origin, and two trivial subspaces, the origin and the whole space. Intutively, it is clear that a line through the origin is a subspace of dimension 1 and a plane through the origin is a subspace of dimension 2: it takes one number to locate a point on a line, and two numbers to locate a point on a plane.

#### The standard basis vectors

##### Definition 1.1.7 (Standard basis vectors)

The *standard basis vectors* in $$\mathbb{R}^n$$ are the vectors $$\vec{\mathbf{e}}_j$$ with $$n$$ entries, the $$j$$th entry $$1$$ and the others zero.

#### Vector fields

##### Definition 1.1.8 (Vector field)

A *vector field* is a function whose input in $$\mathbb{R}^n$$ and whose output is a vector in $$\mathbb{R}^n$$ emanating from that point.

##### Example

By "field", we mean data that varies from point to point. Some fields, like temperature or pressure distribution, are scalar fields: they associate a number to every point. Some fields, like the Newtonian gravitational field, are best modeled by vector fields, which associate a vector to every point. Others, like electromagnetic field and charge distributions, are best modeled by form field. Still others, like the Einsteinian gravitational field of general relativity, are none of the above.

### 1.2 Introducing the actors: matrices

##### Definition 1.2.4 (Matrix Multiplication)

If $$A$$ is an $m \times n$ matrix whose $$(i,j)$$th entry is $$a_{i,j}$$ is $$B$$ is an $$n \times p$$ matrix whose $$(i,j)$$th entry is $$b_{i,j}$$, then $$C = AB$$ is the $$m \times p$$ matrix whose $$(i,j)$$th entry is

$$
c_{i,j} = \sum_{k=1}^n a_{i,k} b_{k,j} = a_{i,1}b_{1,j} + \cdots + a_{i,n}b_{n,j}
$$

Matrix multiplication is associative and distributive, but not commutative.

#### Matrix inverses

##### Definition 1.2.13 (Invertible matrix)

An *invertible matrix* is a matrix that has both a left inverse and a right inverse.

##### Proposition and definition 1.2.14 (Matrix inverse)

If a matrix $$A$$ has both a left and a right inverse, then it has only one left inverse and one right inverse, and they are identical; such a matrix is called the *A* of $$A$$ and is denoted by $$A^{-1}$$.

##### Proposition 1.2.15 (The inverse of the product of matrices)

If $$A$$ and $$B$$ are invertible matrices, then $$AB$$ is invertible and the inverse is given by the formula:

$$
(AB)^{-1} = B^{-1}A^{-1}
$$

#### The transpose

##### Definition 1.2.16 (Transpose)

The *transpose* $$A^T$$ of a matrix $$A$$ is the matrix whose $$(i,j)$$th entry is the $$(j,i)$$th entry of $$A$$.

##### Theorem 1.2.17 (The transpose of a product)

The transpose of a product is the product of the transpose in reverse order:

$$
(AB)^T = B^T A^T
$$

#### Special kinds of matrices

##### Definition 1.2.18 (Symmetric matrix and antisymmetric matrix)

A symmetric matrix is a matrix that is equal to its transpose. An antisymmetric matrix is a matrix that is equal to the negative of its transpose.

##### Definition 1.2.19 (Triangular matrix)

An *upper triangular matrix* is a matrix whose entries below the main diagonal are all zero. A *lower triangular matrix* is a matrix whose entries above the main diagonal are all zero.

#### Applications: Probabilities and graphs

##### Proposition 1.2.23. 

For any graph formed of vertices connected by edges, the number of possible walks of length $$n$$ from vertex $$V_i$$ to vertex $$V_j$$ is given by the $$(i,j)$$th entry of the matrix $$A^n$$ formed by taking the $$n$$th power of the graph's adjacency matrix $$A$$.

**Proof:**(Wait to be finished)

### 1.3 What the Actors do: Matrix Multiplication as a Linear Transformation

##### Definition 1.3.2 (Linear transformation from $$\mathbb{R}^n$$ to $$\mathbb{R}^m$$)

A *linear transformation* $$T: \mathbb{R}^n \to \mathbb{R}^m$$ is a mapping such that for all scalars $$a$$ and all $$\vec{v}$$ and $$\vec{w}$$ in $$\mathbb{R}^n$$,

$$
T(\vec{v} + \vec{w}) = T(\vec{v}) + T(\vec{w})\quad \text{and} \quad T(a\vec{v}) = aT(\vec{v})
$$

##### Theorem 1.3.4 (Matrices and linear transformations)

1. Any $$m \times n$$ matrix $$A$$ defines a linear transformation $$T:\mathbb{R}^n \to \mathbb{R}^m$$ by matrix multiplication:

$$
T(\vec{v}) = A\vec{v}
$$

2. Every linear transformation $$T:\mathbb{R}^n \to \mathbb{R}^m$$ is given by multiplication by an $$m \times n$$ matrix $[T]$$$:

$$
T(\vec{v}) = [T]\vec{v}
$$

where the $$i$$th column of $$[T]$$ is $$T(\vec{e}_i)$$.

`Proof`:

Start with a linear transformation $$T: \mathbb{R}^n \to \mathbb{R}^m$$, let $$\vec{v} \in \mathbb{R}^n$$ be any vector. We could write $$\vec{v}$$ as a linear combination of the standard basis vectors:

$$
\vec{v} = \sum_{i=1}^n v_i \vec{e}_i
$$

Then, by the linearity of $$T$$, we have

$$
T(\vec{v}) = T(\sum_{i=1}^n v_i \vec{e}_i) = \sum_{i=1}^n v_i T(\vec{e}_i)
$$

which is precisely the column vector $$[T]\vec{v}$$. If we tranlate it into sum notation:

$$
T(\vec{v}) = \sum_{i=1}^n v_i T(\vec{e}_i) = v_1 T(\vec{e}_1) + \cdots + v_n T(\vec{e}_n) = [T] \left[\begin{array}{c} v_1 \\ \vdots \\ v_n \end{array}\right] = [T]\vec{v}
$$

##### Theorem 1.3.10 (Composition corresponds to matrix multiplication)

Suppose $$S: \rr^n \to \rr^m$$ and $$T: \rr^m \to \rr^l$$ are linear transformation given by the matrices $$[S]$$ and $$[T]$$ respectively. Then the composition $$T \circ S: \rr^n \to \rr^l$$ is linear and given
by

$$
[T \circ S] = [T][S]
$$

`Proof`:
Apply the definition of linear transformation to $$T \circ  S$$. Therefore, it is linear.

The equation is a statement about matrix multiplication. We will use the following fact derived from the definition of matrix multiplication:

1. $$A \vec{e}_i$$ is the $$i$$th column of $$A$$.
2. The $$i$$the column of $$AB$$ is $$A(B\vec{e}_i)$$.

$$
[T \circ S] \vec{e}_i = T(S(\vec{e}_i)) = T([S]\vec{e}_i) = [T][S]\vec{e}_i
$$

Since $$T \circ S$$ is linear, it is given by the matrix $$[T \circ S]$$. while the definition of composition given the second equlity.

##### Theorem 1.3.12 (Matrix multiplication is associative)

If $$A, B, C$$ are matrices such that the products $$AB$$ and $$BC$$ are defined, then

$$
(AB)C = A(BC)
$$

#### Invertibility of matrices and linear transformation

Recall that a mapping is invertible if it is one to one and onto.

##### Proposition 1.3.14 

A linear transformation $$T: \rr^n \to \rr^m$$ is invertible if and only if its matrix $$[T]$$ is invertible, and

$$
[T^{-1}] = ([T])^{-1}
$$

`Proof`:

- $$\Rightarrow$$:
  We suppose that $$T$$ is invertible. Then $$T$$ is one to one and onto. We will show that $$T^{-1}$$ is also linear. Let $$\vec{v}, \vec{w} \in \rr^n$$, then 

  $$
    T(a T^{-1}(\vec{v}) + b T^{-1}(\vec{w})) = a T(T^{-1}(\vec{v})) + b T(T^{-1}(\vec{w})) = a \vec{v} + b \vec{w} = T \circ T^{-1} (a \vec{v} + b \vec{w})
$$

Since $$T$$ is one to one and onto, $$T^{-1}$$ is linear. Therefore, $$T^{-1}$$ has matrix $$[T^{-1}]$$. We now check that

$$
[T^{-1}] = ([T])^{-1}
$$

Since $$T$$ is invertible, $$[T]$$ is invertible. Therefore, $$[T]^{-1}$$ exists. We have

$$
[TT^{-1}] = [I] = [T][T]^{-1} = [T][T^{-1}]
$$

Thus $$[T]$$ is invertible and its inverse $$[T]^{-1}$$ is $$[T^{-1}]$$.

- $$\Leftarrow$$:
  We suppose that $$[T]$$ is ivertible and we let $$S: \rr^m \to \rr^n$$ be the linear transformation such that $$S = [T]^{-1}$$. We need to show that $$T$$ is one to one and onto. For onto, for any $$\vy \in \rr^m$$, we have

  $$
  \vy = I \vy = [T][T]^{-1} \vy = [T] S \vy = T(S (\vy))
$$

It showing that $$T$$ is onto. For one to one, we need to show that $$T(\vec{v}) = T(\vec{w})$$ implies $$\vec{v} = \vec{w}$$. 

$$
\vv = I \vv = ([S][T]) \vv = S(T(\vv)) = S(T(\vw)) = ([S][T]) \vw = I \vw = \vw
$$

Therefore, $$T$$ is one to one and onto, which means $$T$$ is invertible.

### 1.4 The Gemoetry of $$\rr^n$$

#### The dot product

##### Definition 1.4.1 (Dot product)

The *dot product* of two vectors $$\vec{v}$$ and $$\vec{w}$$ in $$\rr^n$$ is

$$
\vx \cdot \vy = \begin{matrix} x_1 \\ \vdots \\ x_n \end{matrix} \cdot \begin{matrix} y_1 \\ \vdots \\ y_n \end{matrix} = x_1 y_1 + \cdots + x_n y_n
$$

The dot product is commutative and distributive, but not associative.

##### Definition 1.4.2 (Length of a vector)

The *length* $$|\vx|$$ of a vector $$\vx \in \rr^n$$ is

$$
|\vx| = \sqrt{\vx \cdot \vx} = \sqrt{x_1^2 + \cdots + x_n^2}
$$

##### Remark

What we call the length of a vector is often called the Euclidean norm.

#### Length and dot product: Geometry interpretation

##### Proposition 1.4.3 (Geometric interpretation of dot product)

Let $$\vx, \vy$$ be vectors in $$\rr^2$$ or $$\rr^3$$, let $$\alpha$$ be the angle between them, then

$$
\vx \cdot \vy = |\vx||\vy| \cos \alpha
$$

`Proof`:

Write $$|\vx - \vy|^2$$ in two ways(In a trangle and using distributive law):

##### Corollary 1.4.4 (The dot product in terms of projections)

If $$\vx$$ and $$\vy$$ are two vectors in $$\rr^2$$ or $$\rr^3$$, then $$\vx \cdot \vy$$ is the product of $$|\vx|$$ and the signed length of the projection of $$\vy$$ onto the line spanned by $$\vx$$. The signed length of the projection is positive if it points in the direction of $$\vx$$; it is negative if it points in the opposite direction.

#### Defining angles betwwen vectors in $$\rr^n$$

##### Theorem 1.4.5 (Schwarz's inequality)

For any two vectors $$\vv$$ and $$\vw$$ in $$\rr^n$$, we have

$$
|\vv \cdot \vw| \leq |\vv||\vw|
$$

The equality holds if and only if $$\vv$$ and $$\vw$$ are linearly dependent.

`Proof`:

We consider the function 

$$
f(t) = |\vv + t \vw|^2 = (\vv + t \vw) \cdot (\vv + t \vw) = |\vv|^2 + 2t \vv \cdot \vw + t^2 |\vw|^2
$$

Since $$f(t)$$ is always positive, its discriminant is nonpositive:

$$
4(\vv \cdot \vw)^2 - 4 |\vv|^2 |\vw|^2 \leq 0
$$

which is equivalent to

$$
|\vv \cdot \vw| \leq |\vv||\vw|
$$

The second part of Schwarz's inequality that $$ |\vv \cdot \vw| = |\vv| \vw| $$ if and only if $$\vv$$ and $$\vw$$ are linearly dependent. Then, we could write 

$$
\vw  = t \vv
$$

Then, we have

$$
|\vv \cdot \vw| = |\vv \cdot t \vv| = |t| |\vv|^2=|t||t\vw| = |\vv||\vw|
$$

Conversly, if the equlity holds, then the discriminant is zero, which means $$\vv$$ and $$\vw$$ are linearly dependent.

Schwarz's inequality allows us to define the angle between two vectors in $$\rr^n$$.

##### Definition 1.4.6 (Angle between vectors)

The angle between two vectors $\vec{v}$ and $\vec{w}$ in $\mathbb{R}^{n}$ is that angle $\alpha$ satisfying $0 \leq \alpha \leq \pi$ such that

$$
\cos \alpha=\frac{(\vec{v} \cdot \vec{w})}{|\vec{v}||\vec{w}|} .
$$

##### Corollary 1.4.7

Two vectors are orthogonal if their dot product is zero.

##### Theorem 1.4.9 (Triangle inequality)

For any two vectors $$\vv$$ and $$\vw$$ in $$\rr^n$$, we have

$$
|\vv + \vw| \leq |\vv| + |\vw|
$$

`Proof`:

It is straightforward by the definition of length and Schwarz's inequality.

#### Measring matrices

##### Definition 1.4.10 (The length of a matrix)

If $$A$$ is an $$m \times n$$ matrix, then its *length* $$|A|$$ is the square root of the sum of the squares of all its entries:

$$
|A| = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{i,j}|^2} = \sum_{i = 1, \ldots, m} \sum_{j = 1, \ldots, n} |a_{i,j}|^2
$$

##### Remark

The length $$|A|$$ is also called the Frobenius norm of $$A$$.

#### Length and matrix multiplication

##### Proposition 1.4.11. 

a. If $A$ is an $n \times m$ matrix, and $\vec{b}$ is a vector in $\mathbb{R}^{m}$, then

$$
|A \vec{b}| \leq|A||\vec{b}|
$$

b. If $A$ is an $n \times m$ matrix, and $B$ is a $m \times k$ matrix, then

$$
|A B| \leq|A||B|
$$

`Proof`:

For the first inequality, we consider the rows of $$A$$ as tranpose vector $$\vec{a}_i$$, then using Schwarz's inequality.

For the second inequality, we consider the columns of $$B$$ as vector $$\vec{b}_i$$, then using the first inequality.

Actually, the first inequality is a special case of the second inequality.
##### Corollary 1.4.12

Every linear transformation is continuous.

`Proof`:

Let $$T: \rr^n \to \rr^m$$ be a linear transformation. We need to show that for any $$\epsilon > 0$$, there exists a $$\delta > 0$$ such that for any $$\vx, \vy \in \rr^n$$, if $$|\vx - \vy| < \delta$$, then $$|T(\vx) - T(\vy)| < \epsilon$$. We choose $$\delta = \frac{\epsilon}{|A|}$$, by proposition 1.4.11, we have

$$
|\vx - \vy| < \delta \Rightarrow |T(\vx) - T(\vy)| \leq |T||\vx - \vy| < |T| \delta = \epsilon
$$

Therefore, $$T$$ is continuous.

#### Deteiminants in $$\rr^2$$

##### Definition 1.4.13 (Determinant and Trace in $$\rr^2$$)

The *determinant* det and *trace* tr of a $$2 \times 2$$ matrix $$\begin{matrix} a_1 & b_1 \\ a_2 &b_2 \end{matrix}$$ are given by

$$
\det\begin{matrix} a_1 & b_1 \\ a_2 &b_2 \end{matrix} = a_1 b_2 - a_2 b_1
$$

$$
tr \begin{matrix} a_1 & b_1 \\ a_2 &b_2 \end{matrix} = a_1 + b_2
$$

##### Proposition 1.4.14(Geomertric interpretation of the determinant in $$\rr^2$$)

1. The area of the parallelogram spanned by the vector $$\vec{\mathbb{a}}$$ and $$\vec{\mathbb{b}}$$ is $$|\det[\vec{\mathbb{a}}, \vec{\mathbb{b}}]|$$.

2. If $$\rr^2$$ is drawn in the standard way, with $$\vec{\mathbb{e}}_1$$ clockwise from $$\vec{\mathbb{e}}_2$$, then the determinant $$\det[\vec{\mathbb{a}}, \vec{\mathbb{b}}]$$ is positive if and only if $$\vec{\mathbb{a}}$$ lies clockwise from $$\vec{\mathbb{b}}$$. It is negative if and only if $$\vec{\mathbb{a}}$$ lies counterclockwise from $$\vec{\mathbb{b}}$$.nb

`Proof`:

Use the definition of dot product and geometric interpretation of dot product.

#### Determinants in $$\rr^3$$

##### Definition 1.4.15 (Determinant in $$\rr^3$$)

The *determinant* of a $$3 \times 3$$ matrix $$A = \begin{matrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{matrix}$$ is given by

$$
\det A = a_1 \det \begin{matrix} b_2 & c_2 \\ b_3 & c_3 \end{matrix} - b_1 \det \begin{matrix} a_2 & c_2 \\ a_3 & c_3 \end{matrix} + c_1 \det \begin{matrix} a_2 & b_2 \\ a_3 & b_3 \end{matrix} = a_1 (b_2 c_3 - b_3 c_2) - b_1 (a_2 c_3 - a_3 c_2) + c_1 (a_2 b_3 - a_3 b_2)
$$

#### The cross product of two vectors

##### Definition 1.4.17 (Cross product of two vectors in $$\rr^3$$)

The cross product $\vec{a} \times \vec{b}$ in $\mathbb{R}^{3}$ is

$$
\left[\begin{array}{l}
a_{1} \\
a_{2} \\
a_{3}
\end{array}\right] \times\left[\begin{array}{l}
b_{1} \\
b_{2} \\
b_{3}
\end{array}\right]=\left[\begin{array}{r}
\operatorname{det}\left[\begin{array}{ll}
a_{2} & b_{2} \\
a_{3} & b_{3}
\end{array}\right] \\
-\operatorname{det}\left[\begin{array}{ll}
a_{1} & b_{1} \\
a_{3} & b_{3}
\end{array}\right] \\
\operatorname{det}\left[\begin{array}{ll}
a_{1} & b_{1} \\
a_{2} & b_{2}
\end{array}\right]
\end{array}\right]=\left[\begin{array}{r}
a_{2} b_{3}-a_{3} b_{2} \\
-a_{1} b_{3}+a_{3} b_{1} \\
a_{1} b_{2}-a_{2} b_{1}
\end{array}\right]
$$

##### Proposition 1.4.19 (Geometric interpretation of the cross product)

The cross product $\overrightarrow{\mathbf{a}} \times \overrightarrow{\mathbf{b}}$ is the vector satisfying three properties:

1. It is orthogonal to the plane spanned by $\overrightarrow{\mathbf{a}}$ and $\overrightarrow{\mathbf{b}}$; i.e.,

$$
\overrightarrow{\mathbf{a}} \cdot(\overrightarrow{\mathbf{a}} \times \overrightarrow{\mathbf{b}})=0 \text { and } \overrightarrow{\mathbf{b}} \cdot(\overrightarrow{\mathbf{a}} \times \overrightarrow{\mathbf{b}})=0
$$

2. Its length $|\overrightarrow{\mathbf{a}} \times \overrightarrow{\mathbf{b}}|$ is the area of the parallelogram spanned by $\overrightarrow{\mathbf{a}}$ and $\vec{b}$;

3. The three vectors $\overrightarrow{\mathbf{a}}, \overrightarrow{\mathbf{b}}$ and $\overrightarrow{\mathbf{a}} \times \overrightarrow{\mathbf{b}}$ satisfy the right-hand rule.

`Proof`:

1. We could check that dot product of $$\va$$ and $$\va \times \vb$$ is zero by definition of cross product. Similarly, we could check that dot product of $$\vb$$ and $$\va \times \vb$$ is zero by definition of cross product.

2. The area of the parallelogram spanned by $$\va$$ and $$\vb$$ is $$|\va||\vb| \sin \alpha$$, where $$\alpha$$ is the angle between $$\va$$ and $$\vb$$. Just by the simple calculation, we could get the result.

3. Imgine that $$\va$$ and $$\vb$$ are two fingers of your right hand, then the thumb points in the direction of $$\va \times \vb$$.

#### The cross product and the determinant in $$\rr^3$$

##### Proposition 1.4.20 (Determinant in $$\rr^3$$)

1. If $P$ is the parallelepiped spanned by three vectors $$\va, \vb, \vc$$, then

$$
\text{volume of } P = |\va \cdot (\vb \times \vc)| = |\det[\va, \vb, \vc]|
$$

1. The determinant $\det[\va, \vb, \vc]$ is $$0$$ if the vectors are coplanar. If $$\vec{\mathbb{e}}_1, \vec{\mathbb{e}}_2, \vec{\mathbb{e}}_3$$ are drawn the standard way, so they satisfy the right-hand rule, then $$\det[\va, \vb,\vc]$$ is positive if $$\va$$, $$\vb$$, and $$\vc$$ satisfy the right-hand rule, and negative otherwise.

![](https://cdn.mathpix.com/cropped/2023_09_09_f244f1ea25bae6b34846g-082.jpg?height=285&width=363&top_left_y=987&top_left_x=73)

`Proof`:

1. By the graph, we could use the simple calculation to get the result.

2. Imgine that $$\va$$, $$\vb$$, and $$\vc$$ are three fingers of your right hand and consider the geometric interpretation of dot product.

### 1.5 Limits and continuity

#### Open and closed sets

##### Definition 1.5.1 (Open ball)

For any $x \in \mathbb{R}^{n}$ and any $r>0$, the open ball of radius $r$ around $\mathbf{x}$ is the subset

$$
B_{r}(\mathbf{x})=\left\{\mathbf{y} \in \mathbb{R}^{n} \text { such that }|\mathbf{x}-\mathbf{y}|<r\right\} .
$$

##### Definition 1.5.2 (Open set of $$\rr^n$$)

A subset $U$ of $\mathbb{R}^{n}$ is *open* if for every point $\mathbb{x} \in U$ there exists an $r>0$ such that $B_{r}(x) \subset U$.

##### Remark

A set that is not open is not necessarily closed: an open set owns none of its fence. A closed set owns all of its fence.

##### Definition 1.5.4 (Closed set of $$\rr^n$$)

A subset $$C \subset \rr^n$$ is *closed* if its complement $$\rr^n - C$$ is open.

#### Neighborhood, closure, interior, and boundary

##### Definition 1.5.7 (Neighborhood)

A *neighborhood* of a point $$\mathbb{x} \in \rr^n$$ is a subset $$X \subset \rr^n$$ such that there exists $$\epsilon > 0$$ such that $$B_{\epsilon}(\mathbb{x}) \subset X$$.

##### Definition 1.5.8 (Closure)

If $$A$$ is a subset of $$\rr^n$$, the interior of $$A$$, denoted by  denoted by $$\overline{A}$$, is the set of $$\mathbb{x} \in \rr^n$$ such that for all $$r > 0$$,

$$
B_{r}(\mathbf{x}) \cap A \neq \emptyset
$$


##### Definition 1.5.9 (Interior)

If $$A$$ is a subset of $$\rr^n$$, the interor of $$A$$, denoted by $$\mathring{A}$$, is the set of $$\mathbb{x} \in \rr^n$$ such that there exists $$r > 0$$ such that

$$
B_{r}(\mathbf{x}) \subset A
$$

##### Remark

The closure of a closed set is itself. The interior of an open set is itself.

##### Definition 1.5.10 (Boundary of subset)

The *boundary* of a subset $$A \subset \rr^n$$, denoted by $$\partial A$$, consists of those points $$\mathbb{x} \in \rr^n$$ such that every neighborhood of $$\mathbb{x}$$ intersects both $$A$$ and the complement of $$A$$.

##### Remark

THe closure of $$A$$ is thus A plus its boundary; its interior is $$A$$ minus its boundary:

$$
\overline{A} = A \cup \partial A \quad \text{and} \quad \mathring{A} = A - \partial A
$$

The boundary is the closure minus the interior:

$$
\partial A = \overline{A} - \mathring{A}
$$


##### Example

The closure of the rational number $$\qq \in \rr$$ is all of $$\rr$$: the intersection of every neighborhood of every real number with $$\qq$$ is not empty. The interior is empty, and the boundary is $$\rr$$: every neighborhood of every real number contains both rational and irrational numbers.

#### Convergence and limits

##### Definition 1.5.12 (Convergent sequence, limit of a sequence)

A sequence of points $$\mathbb{a}_1, \mathbb{a}_2, \ldots$$ in $$\rr^n$$ is said to *converge* to a point $$\mathbb{a} \in \rr^n$$ if

$$
\forall \epsilon > 0, \exists M | m > M \Longrightarrow |\mathbb{a}_m - \mathbb{a}| < \epsilon
$$

We then call $$\mathbb{a}$$ the *limit* of the sequence.

Convergennce in $$\rr^n$$ is just $$n$$ separate convergences in $$\rr$$.

##### Proposition 1.5.13 (Convergence in terms of coordinates)

A sequence $$(\mathbb{a}_m) = \mathbb{a}_1, \mathbb{a}_2, \ldots$$ with $$\mathbb{a}_i \in \rr^n$$ converges to $$\mathbb{a}$$ if and only if each coordinate converges; i.e., if for all $$j$$ with $$1 \leq j \leq n$$ the coordinate $$(a_m)_j$$ converges to $$(a)_j$$, the $$j$$th coordinate of limit $$\mathbb{a}$$.

`Proof`:
$$"\Longrightarrow"$$:

Assmue there exists $$\epsilon > 0$$ being arbitrary, we could always find a $$M$$ such that $$\forall m > M\;|\mathbb{a}_m - \mathbb{a}| < \epsilon$$. Since,

$$
|\mathbb{a}_m - \mathbb{a}| = \sqrt{\sum_{j=1}^n |(a_m)_j - (a)_j|^2} < \epsilon
$$

Therefore, $$|(a_m)_j - (a)_j| < \epsilon$$, which means $$(a_m)_j$$ converges to $$(a)_j$$.

$$"\Longleftarrow"$$:

Let $$\epsilon > 0$$ be arbitrary. We could find a $$M_j$$ such that $$\forall m > M_j$$, $$|(a_m)_j - (a)_j| < \frac{\epsilon}{\sqrt{n}}$$. Let $$M = \max\{M_1, \ldots, M_n\}$$, then if $$m > M$$, we have

$$
|\mathbb{a}_m - \mathbb{a}| = \sqrt{\sum_{j=1}^n |(a_m)_j - (a)_j|^2} < \sqrt{\sum_{j=1}^n \frac{\epsilon^2}{n}} = \epsilon
$$

##### Theorem 1.5.14(Elegance is not required)

Let $$u$$ be a function of $$\epsilon$$ such that $$u(\epsilon) \to 0$$ as $$\epsilon \to 0$$. Then the following two statements about a point $$\mathbb{a}$$ and a sequence $$\va_1,\va_2 \ldots$$ are equivalent:

1. For all $$\epsilon > 0$$ there exists $$M$$ such that $$m > M$$ implies $$|\mathbb{a}_m - \mathbb{a}| < u(\epsilon)$$.

2. For all $$\epsilon > 0$$ there exists $$M$$ such that $$m > M$$ implies $$|\mathbb{a}_m - \mathbb{a}| < \epsilon$$.

Both means that the sequence $$\mathbb{a}_1, \mathbb{a}_2, \ldots$$ converges to $$\mathbb{a}$$.

##### Proposition 1.5.15 (Limit of sequence is unique)

If the sequence of points $$\mathbb{a}_1, \mathbb{a}_2, \ldots$$ in $$\rr^n$$ converges to $$\mathbb{a}$$ and to $$\mathbb{b}$$, then $$\mathbb{a} = \mathbb{b}$$.

`Proof`:

We prove this by contradiction. We assume that $$\mathbb{a} \neq \mathbb{b}$$. Let $$\epsilon = \frac{|\mathbb{a} - \mathbb{b}|}{2}$$, then $$\epsilon > 0$$. By the definition of the limit, there exists $$M_1$$ such that $$|\mathbb{a}_m - \mathbb{a}| < \epsilon$$ for all $$m > M_1$$, and there exists $$M_2$$ such that $$|\mathbb{a}_m - \mathbb{b}| < \epsilon$$ for all $$m > M_2$$. Let $$M = \max\{M_1, M_2\}$$, then if $$m > M$$, we have

$$
|\mathbb{a} - \mathbb{b}| = |(\mathbb{a}-\mathbb{a}_m) + (\mathbb{a}_m - \mathbb{b}| \leq |\mathbb{a}-\mathbb{a}_m| + |\mathbb{a}_m - \mathbb{b}| < 2 \epsilon = |\mathbb{a} - \mathbb{b}|
$$

which is a contradiction, so $$\mathbb{a} = \mathbb{b}$$.

##### Theorem 1.5.16 (The arithmetic of limits of sequences)

Let $$\mathbb{a}_m, \mathbb{b}_m$$ be two sequences of points in $$\rr^n$$, and $$c_m$$ be a sequence of numbers. Then,

1. If $$\va_m$$ and $$\vb_m$$ both converges, then so does $$\va_m + \vb_m$$, and

$$
\lim_{m \to \infty} (\va_m + \vb_m) = \lim_{m \to \infty} \va_m + \lim_{m \to \infty} \vb_m
$$

2. If $$\va_m$$ and $$c_m$$ both converges, then so does $$c_m \va_m$$, and

$$
\lim_{m \to \infty} (c_m \va_m) = \lim_{m \to \infty} c_m \lim_{m \to \infty} \va_m
$$

3. If the sequence $$\va_m$$ and $$\vb_m$$ converges, then so do the sequences of vectors $$\va_m \cdot \vb_m$$, and the limit of the dot products is the dot product of the limits:

$$
\lim_{m \to \infty} (\va_m \cdot \vb_m) = \lim_{m \to \infty} \va_m \cdot \lim_{m \to \infty} \vb_m
$$

4. If $$\va_m$$ is bounded and $$c_m$$ converges to $$0$$, then

$$
\lim_{m \to \infty} (c_m \va_m) = 0
$$

##### Proposition 1.5.17 (Sequence in closed set)

Let $$\vx_1, \vx_2, \ldots$$ be a convergent sequence in a closed set $$C\subset \rr^n$$. If $$\vx_1, \vx_2, \ldots$$ converges to $$\vx_0$$, then $$\vx_0 \in C$$.

Conversely, if every convergent sequence in a set $$C \subset \rr^n$$ converges to a point in $$C$$, then $$C$$ is closed.

`Proof`:
"$$\Longrightarrow$$": We prove this by contradiction, if $$x_0 \notin C$$, then $$x_0 \in \rr^n - C$$, which is open. Therefore, there exists $$r > 0$$ such that $$B_r(\vx_0)\subset (\rr^n -C)$$. Then for all $$n\in \nn$$, we have $$|\vx_n - \vx_0| \leq r$$. By the definition of convergence, we must have $$|\vx_m - \vx_0| < \epsilon$$ for all $$m > M$$. We choose $$\epsilon = \frac{r}{2}$$. 

#### Subsequences

##### Definition 1.5.18 (Subsequence)

A *subsequence* of a sequence $$a_1, a_2, \ldots$$ is a sequence formed by taking first some element of the original sequence, then another element further on, then another, yet further on, and so on.... It is denoted $$a_{i(1)}, a_{i(2)}, \ldots$$, where $$i(k) > i(j)$$ when $$k > j$$.

##### Proposition 1.5.19 (Subsequence of convergent sequence convergence)

If a sequence $$\va_k$$ convergences to $$\va$$, then every subsequence $$\va_{i(k)}$$ converges to $$\va$$.

#### Limits of functions

##### Definition 1.5.20 (Limit of function)

Let $$X$$ be a subset of $$\rr^n$$. A function $$\mathbb{f}:X \to \rr^m$$ has the *limit* $$\mathbb{a}$$ at $$\vx_0$$:

$$
\lim_{\vx \to \vx_0} \mathbb{f}(\vx) = \mathbb{a}
$$

if $$\vx_0 \in \overline{X}$$ and

$$
\forall \epsilon > 0, \exists \delta > 0 \text{ such that } \forall \vx \in X, 0 < |\vx - \vx_0| < \delta \Longrightarrow |\mathbb{f}(\vx) - \mathbb{a}| < \epsilon
$$

##### Proposition 1.5.21 (Limit of function is unique)

If a function has a limit, it is unique.

`Proof`:

We prove this by contradiction and apply triangle inequality.

##### Proposition 1.5.22 (LImit of $$\rr^m$$-valued function)

Let

$$
\mathbb{f}(\bx) = \begin{pmatrix} f_1(\bx) \\ \vdots \\ f_m(\bx) \end{pmatrix}
$$

be a function defined on a domain $$U \subset \rr^n$$, and let $$\bx_0 \in \rr^n$$ be a point in $$\overline{U}$$. Then

$$
\lim_{\bx \to \bx_0} \mathbb{f}(\bx) = \mathbb{a} \text{ exists } \Longleftrightarrow \lim_{\bx \to \bx_0} f_j(\bx) = a_j \text{ exists for all } j = 1, \ldots, m
$$

In that case,

$$
\lim_{\bx \to \bx_0} \mathbb{f} = \begin{pmatrix}
\lim_{\bx \to \bx_0} f_1(\bx) \\ \vdots \\ \lim_{\bx \to \bx_0} f_m(\bx)
\end{pmatrix}
$$

$$
\ba = \begin{pmatrix}
a_1 \\ \vdots \\ a_m
\end{pmatrix}
$$

`Proof`:

"$$\Longrightarrow$$":
Fix $$\epsilon > 0$$ be arbitrary. Since $$\lim_{\bx \to \bx_0} \mathbb{f}(\bx) = \mathbb{a}$$, there exists $$\delta > 0$$ such that $$\forall \bx \in U, |\bx - \bx_0| < \delta \Longrightarrow |\mathbb{f}(\bx) - \mathbb{a}| < \epsilon$$. Since, $$|f_i(\bx) - a_i| \leq |\mathbb{f}(\bx) - \mathbb{a}|$$, we have $$|f_i(\bx) - a_i| < \epsilon$$ for all $$i = 1, \ldots, m$$.

"$$\Longleftarrow$$":
Fix $$\epsilon > 0$$ be arbitrary. Since $$\lim_{\bx \to \bx_0} f_i(\bx) = a_i$$ for all $$i = 1, \ldots, m$$, there exists $$\delta_i > 0$$ such that $$\forall \bx \in U, |\bx - \bx_0| < \delta_i \Longrightarrow |f_i(\bx) - a_i| <{\epsilon}$$. Let $$\delta = \min\{\delta_1, \ldots, \delta_m\}$$, then if $$|\bx - \bx_0| < \delta$$, we have

$$
|\mathbb{f} - \ba| = \sqrt{\sum_{i=1}^m |f_i(\bx) - a_i|^2} < \sqrt{\sum_{i=1}^m \epsilon^2} = \epsilon\sqrt{m}
$$

Therefore, $$\lim_{\bx \to \bx_0} \mathbb{f}(\bx) = \mathbb{a}$$.

##### Theorem(1.5.23) (Limits of functions)

Let $$U$$ be a subset of $$\rr^n$$ and let $$\mathbb{f}$$ and $$\mathbb{g}$$ be functions $$U \to \rr^m$$ and $$h$$ a function $$U \to \rr$$.

1. If $$\lim_{\bx \to \bx_0} \mathbb{f}(\bx)$$ and $$\lim_{\bx \to \bx_0} \mathbb{g}(\bx)$$ exist, then $$\lim_{\bx \to \bx_0}(\mathbb{f}+\mathbb{g})(\bx)$$ exists, and

$$
\lim_{\bx \to \bx_0}(\mathbb{f}+\mathbb{g})(\bx) = \lim_{\bx \to \bx_0} \mathbb{f}(\bx) + \lim_{\bx \to \bx_0} \mathbb{g}(\bx)
$$

2. If $$\lim_{\bx \to \bx_0} \mathbb{f}(\bx)$$ and $$\lim_{\bx \to \bx_0} h(\bx)$$ exist, then $$\lim_{\bx \to \bx_0}(h\mathbb{f})(\bx)$$ exists, and

$$
\lim_{\bx \to \bx_0}(h\mathbb{f})(\bx) = \lim_{\bx \to \bx_0} h(\bx) \lim_{\bx \to \bx_0} \mathbb{f}(\bx)
$$

3. If $$\lim_{\bx \to \bx_0} \mathbb{f}(\bx)$$ exists, and $$\lim_{\bx \to \bx_0}h(\bx)$$ exists and is different from $$0$$, then $$\lim_{\bx \to \bx_0} \frac{\mathbb{f}(\bx)}{h(\bx)}$$ exists, and

$$
\lim_{\bx \to \bx_0} \frac{\mathbb{f}(\bx)}{h(\bx)} = \frac{\lim_{\bx \to \bx_0} \mathbb{f}(\bx)}{\lim_{\bx \to \bx_0} h(\bx)}
$$

4. If $$\lim_{\bx \to \bx_0} \mathbb{f}(\bx)$$ and $$\lim_{\bx \to \bx_0} \mathbb{g}(\bx)$$ exist, and

$$
\lim_{\bx \to \bx_0}(\mathbb{f} \cdot \mathbb{g})(\bx) = \lim_{\bx \to \bx_0} \mathbb{f}(\bx) \cdot \lim_{\bx \to \bx_0} \mathbb{g}(\bx)
$$

5. If $$\mathbb{f}$$ is bounded on $$U$$, and if $$\lim_{\bx \to \bx_0}h(\bx) = 0$$, then

$$
\lim_{\bx \to \bx_0} (h \mathbb{f})(\bx) = 0
$$

6. If $$\lim_{\bx \to \bx_0}\mathbb{f}(\bx) = 0$$ and $$h$$ is bounded, then

$$
\lim_{\bx \to \bx_0} (h \mathbb{f})(\bx) = 0
$$

##### Theorem 1.5.24(Limit of a composition)

Let $$U \subset \rr^n$$, $$V \subset \rr^m$$ be subsets, and $$\mathbb{f}:U \to V$$ and $$\mathbb{g}: V \to \rr^k$$ be mappings, so that $$g \circ f$$ is defined in $$U$$. If

$$
\by = \lim_{\bx \to \bx_0} \mathbb{f}(\bx) \text{ and } \lim_{\by \to \by_0} \mathbb{g}(\by) = \bz_0
$$

both exist, then $$\lim_{\bx \to \bx_0} \mathbb{g} \circ \mathbb{f}(\bx)$$ exist, and

$$
\lim_{\bx \to \bx_0} \mathbb{g} \circ \mathbb{f}(\bx) = \bz_0
$$

`Proof`:

Since for all $$\epsilon > 0$$, there exists $$\delta_1 > 0$$ such that if $$|\by - \by_0| < \delta_1$$ then $$|\mathbb{g}(\by) - \bz_0| < \epsilon$$. Therefore, there exists a $$\delta > 0$$ such that if $$|\bx - \bx_0| < \delta$$, then $$|\mathbb{f}(\bx) - \by_0| < \delta_1$$. Therefore, $$|\mathbb{g}(\mathbb{f}(\bx)) - \bz_0| < \epsilon$$.

##### Remark

If we approach the point in different ways, the limits may be different.

#### continuous functions

##### Definition 1.5.26 (continuous function)

Let $$X \subset \rr^n$$. Then a mapping $$\mathbb{f}: X \to \rr^m$$ is *continuous* at $$\bx_0 \in X$$ if

$$
\lim_{\bx \to \bx_0} \mathbb{f}(\bx) = \mathbb{f}(\bx_0)
$$

$$\mathbb{f}$$ is *continuous* on $$X$$ if it is continuous at every point $$\bx_0 \in X$$. Equivalently, $$\mathbb{f} : X \to \rr^m$$ is continuous at $$\bx_0 \in X$$ if and only if for every $$\epsilon > 0$$ there exists $$\delta > 0$$ such that when $$\bx \in X$$ and $$|\bx - \bx_0| < \delta$$, then $$|\mathbb{f}(\bx) - \mathbb{f}(\bx_0)| < \epsilon$$.

##### Proposition 1.5.27 (Criterion for continuity)

A function $$\mathbb{f} : X \to \rr^m$$ is continuous at $$\bx_0 \in X$$ if and only if for every sequence $$\bx_i \in X$$ converging to $$\bx_0$$,

$$
\lim_{i \to \infty} \mathbb{f}(\bx_i) = \mathbb{f}(\bx_0)
$$

`Proof`:

"$$\Longrightarrow$$": We need to show that

$$
\lim_{i \to \infty} \mathbb{f}(\bx_i) = \mathbb{f}(\bx_0)
$$

that means we need to find a $$N$$ such that for all $$i > n$$, we have
$$|\mathbb{f}(\bx_i) - \mathbb{f}(\bx_0)| < \epsilon$$. 
We fix this $$\epsilon$$. Since $$\mathbb{f}$$ is continuous, then we could find a $$\delta > 0$$ such that if $$|\bx - \bx_0| < \delta$$, then $$|\mathbb{f}(\bx) - \mathbb{f}(\bx_0)| < \epsilon$$. Since there is a sequence $$\bx_i \in X$$ convergening to $$\bx_0$$, then we could find a $$N$$ such that for all $$i > N$$, we have $$|\bx_i - \bx_0| < \delta$$. Therefore, for all $$i > N$$, we have $$|\mathbb{f}(\bx_i) - \mathbb{f}(\bx_0)| < \epsilon$$.

"$$\Longleftarrow$$": We prove this by contradiction. Assume $$\mathbb{f}$$ is not continuous at $$x_0 \in X$$. Then, there exists a $$\epsilon_0>0$$ such that for all $$\delta > 0$$, there exists a $$\bx \in X$$ such that $$|\bx - \bx_0| < \delta$$ and $$|\mathbb{f}(\bx) - \mathbb{f}(\bx_0)| \geq \epsilon_0$$. We set $$\delta = \frac{1}{n}$$, and let $$x_n \in X$$ be such a point, satisfying that

$$
|\bx_n - \bx_0| < \frac{1}{n} \text{ and } |\mathbb{f}(\bx_n) - \mathbb{f}(\bx_0)| \geq \epsilon_0
$$

Since $$\bx_n \to \bx_0$$, then $$\lim_{n \to \infty} \mathbb{f}(\bx_n) = \mathbb{f}(\bx_0)$$. However, $$|\mathbb{f}(\bx_n) - \mathbb{f}(\bx_0)| \geq \epsilon_0$$, which is a contradiction.

##### Theorem 1.5.28 (Combining continuous mappings)

Let $$U$$ be a subset of $$\rr^n$$,  $$\mathbb{f}$$ and $$\mathbb{g}$$ mappings $$U \to \rr^m$$, and $$h$$ a function $$U \to \rr$$.

1. If $$\mathbb{f}$$ and $$\mathbb{g}$$ are continuous at $$\bx_0 \in U$$, then so $$\mathbb{f} + \mathbb{g}$$.
2. If $$\mathbb{f}$$ and $$h$$ are continuous at $$\bx_0 \in U$$, then so is $$h\mathbb{f}$$.
3. If $$\mathbb{f}$$ and $$h$$ are continuous at $$\bx_0 \in U$$, and $$h(\bx_0) \neq 0$$, then $$\frac{\mathbb{f}}{h}$$ is continuous at $$\bx_0$$.
4. If $$\mathbb{f}$$ and $$\mathbb{g}$$ are continuous at $$\bx_0 \in U$$, then so is $$\mathbb{f} \cdot \mathbb{g}$$.
5. If $$\bx_0 \in \overline{U}$$, the function $$h$$ is continuous at $$bx_0$$ with $$h(\bx_0) = 0$$, and there exists $$C, \delta > 0$$ such that $$|\mathbb{f}(\bx)| \leq C$$ for $$\bx \in U, |\bx - \bx_0| < \delta$$, then the map

$$
\bx \mapsto \begin{cases}
h(\bx)\mathbb{f}(\bx) \text{ for } \bx \in U \\
0 \text{ if } \bx = \bx_0
\end{cases}
$$

is continuous at $$\bx_0$$.

##### Theorem 1.5.29 (Conposition of continuous functions)

Let $$U \subset \rr^n, V \subset \rr^m$$ be subsets, and $$\mathbb{f}: U \to V$$ and $$\mathbb{g}: V \to \rr^k$$ be mappings, so that $$\mathbb{g} \circ \mathbb{f}$$ is defined. If $$\mathbb{f}$$ is continuous at $$bx_0$$, and $$\mathbb{g}$$ is continuous at $$\mathbb{f}(\bx_0)$$, then $$\mathbb{g} \circ \mathbb{f}$$ is continuous at $$\bx_0$$.

##### Corollary 1.5.30 (Continuity of polynomials and rational functions)

1. Any polynomial function $$\rr^n \to \rr$$ is continuous on all of $$\rr^n$$.

2. Any rational function is continuous on the subset of $$\rr^n$$ where the denominator does not vanish.

#### Uniform continuity

##### Definition 1.5.31 (Uniform continuous functions)

Let $$X$$ be a subset of $$\rr^n$$. Then a mapping $$\mathbb{f}: X \to \rr^m$$ is uniformly continous on $$X$$ if for all $$\epsilon > 0$$ there exists $$\delta > 0$$ such that for all $$\bx, \bx \in \rr^n$$, if $$|\bx - \by| < \delta$$, then $$|\mathbb{f}(\bx) - \mathbb{f}(\by)| < \epsilon$$.

##### Theorem 1.5.32 (Linear functions are uniformly continuous)

Every linear transformation $$T: \rr^n \to \rr^m$$ is uniformly continuous.

`Proof`






