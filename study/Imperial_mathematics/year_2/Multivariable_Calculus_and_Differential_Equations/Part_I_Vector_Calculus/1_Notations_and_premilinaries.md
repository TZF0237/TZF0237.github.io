---
title: 1. Notations and Premilinaries
layout: simple
---

$$\gdef\R{\mathbb{R}}$$
$$\gdef\C{\mathbb{C}}$$
$$\gdef\Z{\mathbb{Z}}$$ 
$$\gdef\N{\mathbb{N}}$$
$$\gdef\Q{\mathbb{Q}}$$
$$\gdef\F{\mathcal{F}}$$
$$\gdef\abs#1{\left| #1 \right|}$$
$$\gdef\pap#1{\frac{\partial \phi }{\partial #1}}$$
$$\gdef\va{\mathbf{a}}$$
$$\gdef\vb{\mathbf{b}}$$
$$\gdef\vc{\mathbf{c}}$$
$$\gdef\ve{\varepsilon}$$
$$\gdef\nvi{\widehat{\mathbf{i}}}$$
$$\gdef\nvj{\widehat{\mathbf{j}}}$$
$$\gdef\nvk{\widehat{\mathbf{k}}}$$
$$\gdef\nve{\widehat{\mathbf{e}}}$$
$$\gdef\ns{\widehat{\mathbf{s}}}$$
$$\gdef\nn{\widehat{\mathbf{n}}}$$
$$\gdef\d{\operatorname{div}}$$
$$\gdef\cu{\operatorname{curl}}$$
$$\gdef\g{\nabla}$$
$$\gdef\vf{\mathbf{A}}$$

## 1.1 Notations

- $$\va, \vb, \vc$$ are **vectors** in $$\R^3$$.

- $$\phi$$ is a **scalar fieldn**: $$\phi: \R^n \to \R$$.

- $$\vf$$ is a **vector field**: $$\vf: \R^n \to \R^n$$.

- **Einstein summation convention**: 

   $$
   a_{i} x_{i} = \sum_{i=1}^{3} a_{i} x_{i}.
   $$

- **Tensors**
  
   - **The Kronecker delta**: 

      $$
      \delta_{ij} = \begin{cases}
      1 & \text{if } i = j, \\
      0 & \text{if } i \neq j.
      \end{cases}
      $$

      > Remark:
      >
      >$$
      \delta_{ij} a_{j} = \sum_{j=1}^{3} \delta_{ij} a_{j} = a_{i}
      $$

   - **The Permutation symbol**:
  
      $$
      \epsilon_{ijk} = \begin{cases}
      1 & \text{if } (i, j, k) \text{ is an even permutation of } (1, 2, 3), \\
      -1 & \text{if } (i, j, k) \text{ is an odd permutation of } (1, 2, 3), \\
      0 & \text { if any two of } i, j, k \text { are the same. }
      \end{cases}
      $$
   
      > **Remark**
      >
      >> - 
            $$
            \varepsilon_{i j k} \varepsilon_{k l m} = \delta_{i l} \delta_{j m}-\delta_{i m} \delta_{j l}
            $$ 
      >>
      >>    **which is sum over $$k$$.**
      >>
      >> `Proof`:
      >>
      >> - `Overview`: If $$i = j$$ or $$l = m$$, then the left hand side are all $$0$$ and the right hand side is $$0$$. Therefore,we only need to consider the case that $$i \neq j$$ and $$l \neq m$$. Next, we notice that if we swap the $$i$$ & $$j$$ in the left hand side, the sign of both sides will change. Therefore, we only need to consider the case that $$i < j$$ and $$l < m$$. The cases that we need to consider are
      >>
      >>    $$
            (i, j) = (1, 2), (1, 3), (2, 3)
            $$
      >>
      >> - `Left hand side`:
      >>
      >>    $$
            \begin{aligned}
            \varepsilon_{1 2 k} \varepsilon_{k l m} & = \varepsilon_{1 2 1} \varepsilon_{1 l m} + \varepsilon_{1 2 2} \varepsilon_{2 l m} +\varepsilon_{1 2 3} \varepsilon_{3 l m} \\
            & = \varepsilon_{1 2 3} \varepsilon_{3 l m} =  \varepsilon_{3 l m} \\
            & = \begin{cases} 0  \text{ if } l \text{ or } m = 3 \\ 1 \text{ if } (l, m) = (1, 2)  \end{cases}
            \end{aligned}
            $$
      >>   
      >> - `Right hand side`:
      >>
      >>    $$
            \delta_{1 l} \delta_{2 m}-\delta_{1 m} \delta_{2 l} = \begin{cases} 0  \text{ if } l \text{ or } m = 3 \\ 1 \text{ if } (l, m) = (1, 2) \\ \end{cases}
            $$
      >>
      >> The left cases are similar. $$\square$$
      >>
      >> There is an alternative form:
      >>
      >>    $$
            \varepsilon_{i j k} \varepsilon_{k l m} = \delta_{j l} \delta_{k m}-\delta_{j m} \delta_{k l}
            $$ 
      >>
      >>    **which is sum over $$i$$**.

## 1.2 Premilinaries

### 1.1.1 All products of vectors

> *For the following, we assume $$\va = (a_1, a_2, a_3)$$, $$\vb = (b_1, b_2, b_3)$$ and $$\vc = (c_1, c_2, c_3)$$ are vectors in $$\R^3$$.*

#### $$\textcolor{orange}{\textsf{Definition (Vector product)}}$$ 

The **vector product** of $$\va$$ and $$\vb$$ is a third vecotr perpendicular to both $$\va$$ and $$\vb$$, and is denoted by $$\va \times \vb$$ and could be calculated by

$$
\mathbf{a} \times \mathbf{b}=\left|\begin{array}{ccc}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_{1} & a_{2} & a_{3} \\
b_{1} & b_{2} & b_{3}
\end{array}\right|
$$

> **Remark**:
> 
>> - If $$\va \times \vb = 0$$, then the two vectors are parallel.
>
>> - By the properties of the determinant, $$\va \times \vb = - \vb \times \va.$$
>
>> -
   $$
   [\va \times \vb]_{i} = \ve_{ijk}a_jb_k
   $$
>>
>> `Proof`:
>>
>>    $$
      \begin{aligned}
      a_{2} b_{3}-a_{3} b_{2} & = \ve_{123}a_2b_3 + \ve_{132}a_3b_2 \\
      & = \ve_{ijk}a_jb_k \\
      \end{aligned}
      $$
>>
>> since $$\varepsilon_{123}=1, \varepsilon_{132}=-1$$, and $$\varepsilon_{1 i j}=0$$ for all other $$i$$ and $$j$$. The other two components are similar. $$\square$$


#### $$\textcolor{orange}{\textsf{Definition (Scalar product)}}$$

The **scalar product** of $$\va$$ and $$\vb$$ is a scalar and is denoted by $$\va \cdot \vb$$ and could be calculated by

$$
\mathbf{a} \cdot \mathbf{b}=a_{1} b_{1}+a_{2} b_{2}+a_{3} b_{3} = a_i b_i
$$

> **Remark**:
> 
> If $$\mathbf{a} \cdot \mathbf{b}=0$$ then the vectors $$\mathbf{a}$$ and $$\mathbf{b}$$ are orthogonal.
>

#### $$\textcolor{orange}{\textsf{Definition (Triple scalar product)}}$$

The **triple scalar product** of $$\va$$, $$\vb$$ and $$\vc$$ is a scalar and is denoted by $$\va \cdot (\vb \times \vc)$$ and could be calculated by

$$
\begin{aligned}
\va \cdot (\vb \times \vc) & = a_i [\vb \times \vc]_i \\
& = a_i \ve_{ijk}b_jc_k \\
& = \ve_{ijk}a_ib_jc_k \\
\end{aligned}
$$

sum over $$i$$, $$j$$ and $$k$$.

> **Remark**:
>
>> - If the triple scalar product is zero, then the three vectors are coplanar.
>
>> - The dot and vector product could be swapped without changing the value of the triple scalar product:
>>
>> $$
   \mathbf{a} \cdot(\mathbf{b} \times \mathbf{c})=(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} .
   $$
>>
>> `Proof`:
>>
>> $$
   \va \cdot (\vb \times \vc) = \ve_{ijk}a_ib_jc_k = (\ve_{kij}a_ib_j)c_k  = [\va \times \vb]_k c_k = (\va \times \vb) \cdot \vc.
   $$ $$\square$$

#### $$\textcolor{orange}{\textsf{Definition (Triple vector product)}}$$

The **triple cross product** of $$\va$$, $$\vb$$ and $$\vc$$ is a vector and is denoted by $$\va \times (\vb \times \vc)$$ and could be calculated by

$$
\begin{aligned}
{[\mathbf{a} \times(\mathbf{b} \times \mathbf{c})]_{i} } & = \ve_{ijk} \va_j[\vb \times \vc]_k\\
& = \ve_{ijk}a_j \ve_{klm}\vb_l\vc_m\\
& = \ve_{ijk}\ve_{klm}a_j\vb_l\vc_m\\
& = (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\va_j\vb_l\vc_m\\
& = \va_j\vb_i\vc_j - \va_j\vb_j\vc_i\\
& = (\va \cdot \vc)\vb_i - (\va \cdot \vb)\vc_i\\
\end{aligned}
$$

$$
\tag{1}
\mathbf{a} \times(\mathbf{b} \times \mathbf{c})=(\mathbf{a} \cdot \mathbf{c}) \mathbf{b}-(\mathbf{a} \cdot \mathbf{b}) \mathbf{c}
$$

> **Remark**:
>
>> - The triple vector product indeed lies in the plane spanned by $$\vb$$ and $$\vc$$ according to the equation (1).
>
>> - We could aalculate the triple vector product by the determinant:
>>
>> $$
   \mathbf{a} \times(\mathbf{b} \times \mathbf{c})=\left|\begin{array}{ccc}
   a_{1} & a_{2} & a_{3} \\
   b_{1} & b_{2} & b_{3} \\
   c_{1} & c_{2} & c_{3}
   \end{array}\right|
   $$
>>
>> `Proof`:
>>  
>> $$
   \begin{aligned}
   \mathbf{a} \times(\mathbf{b} \times \mathbf{c}) & = \ve_{ijk}a_j[\vb \times \vc]_k \\
   & = \ve_{ijk}a_j\ve_{klm}\vb_l\vc_m \\
   & = \ve_{ijk}\ve_{klm}a_j\vb_l\vc_m \\
   & = (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})a_j\vb_l\vc_m \\
   & = a_j\vb_i\vc_j - a_j\vb_j\vc_i \\
   & = \left|\begin{array}{ccc}
   a_{1} & a_{2} & a_{3} \\
   b_{1} & b_{2} & b_{3} \\
   c_{1} & c_{2} & c_{3}
   \end{array}\right|  \square
   \end{aligned}
   $$ 




