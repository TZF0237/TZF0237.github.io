---
title: "Machine Learning Basics: A Gentle Introduction"
categories:
  - tech
tags:
  - machine-learning
  - data-science
  - python
date: 2025-01-10
read_time: true
comments: true
share: true
related: true
toc: true
---

Machine learning might sound intimidating, but at its core, it's about finding patterns in data. Let's break down the basics.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence where algorithms learn from data without being explicitly programmed.

## Types of Machine Learning

### Supervised Learning

The algorithm learns from labeled data. Examples include:
- Classification (spam detection)
- Regression (price prediction)

### Unsupervised Learning

The algorithm finds patterns in unlabeled data. Examples include:
- Clustering (customer segmentation)
- Dimensionality reduction

### Reinforcement Learning

The algorithm learns by interacting with an environment and receiving rewards or penalties.

## Getting Started

The best way to start is with scikit-learn:

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load data
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2
)

# Train model
clf = RandomForestClassifier()
clf.fit(X_train, y_train)

# Evaluate
print(f"Accuracy: {clf.score(X_test, y_test):.2f}")
```

## Next Steps

Start with simple datasets and gradually work your way up to more complex problems. The key is consistent practice!
