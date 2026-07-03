---
title: "Getting Started with Python for Data Science"
categories:
  - tech
tags:
  - python
  - data-science
  - tutorial
date: 2024-08-15
read_time: true
comments: true
share: true
related: true
toc: true
---

Python has become the go-to language for data science and machine learning. In this post, I'll walk you through setting up your environment and writing your first data analysis script.

## Why Python?

Python's simplicity and rich ecosystem make it ideal for data science. Libraries like NumPy, Pandas, and Matplotlib provide powerful tools for data manipulation and visualization.

## Setting Up Your Environment

First, install Python from [python.org](https://python.org). Then set up a virtual environment:

```bash
python -m venv myenv
source myenv/bin/activate  # On Windows: myenv\Scripts\activate
pip install numpy pandas matplotlib jupyter
```

## Your First Data Analysis

Let's load a CSV file and analyze it:

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('data.csv')

# Basic statistics
print(df.describe())

# Plot
df['column'].hist()
plt.show()
```

## Conclusion

Python makes data analysis accessible. In future posts, we'll dive deeper into machine learning and advanced visualization techniques.
