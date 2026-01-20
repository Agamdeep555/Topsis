# TOPSIS Implementation in Python

**Course:** UCS654 - Predictive Analytics using Statistics  
**Assignment:** Assignment-1 (TOPSIS)  
**Author:** Agamdeep Singh  
**Roll Number:** 102303261

---

## About the Project

This repository contains a comprehensive Python implementation of the **TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution)** method. TOPSIS is a powerful **multi-criteria decision-making (MCDM)** technique used to rank multiple alternatives based on their distance from the ideal best and ideal worst solutions.

This project provides both a command-line interface and a web application for performing TOPSIS analysis on datasets with multiple criteria.

---

## Installation - User Manual

### Requirements
- Python 3.x or higher
- Dependencies (automatically installed with the package):
  - pandas
  - numpy

### Setup Instructions

1. The package is available on PyPI: [topsis-agamdeep-555](https://pypi.org/project/topsis-agamdeep-555/0.1.6/)

2. Install using pip:
   ```bash
   pip install Topsis-Agamdeep-102303261
   ```

---

## Usage

### Command Line Interface

Run the following command in your terminal or command prompt:

```bash
topsis <inputFile> <weights> <impacts> <outputFile>
```

**Example:**
```bash
topsis sample.csv "1,1,1,1" "+,+,-,+" result.csv
```

### Parameters
- `inputFile`: Path to your input CSV file containing the data
- `weights`: Comma-separated weights (non-negative values, > 0)
- `impacts`: Comma-separated impacts indicating if each criterion is positive (+) or negative (-)
- `outputFile`: Path where the results will be saved

---

## Methodology

The TOPSIS implementation follows this systematic approach:

1. **Data Collection** - Load the input dataset from CSV file
2. **Calculate Normalization Factors** - Compute the root square sum for each feature
3. **Normalize Attributes** - Normalize every attribute to bring them on a comparable scale
4. **Identify Ideal Solutions** - Find the ideal best and ideal worst solutions
5. **Calculate Euclidean Distance** - Compute distance from each alternative to ideal solutions
6. **Compute TOPSIS Score** - Calculate the separation-based score for ranking
7. **Rank Alternatives** - Sort alternatives based on their TOPSIS scores

---

## Project Description

### Dataset
- Primary data source: `Data.csv`
- Any CSV file with numerical attributes can be used as input

### Parameters
- **Weights:** Non-negative numerical values (> 0) that represent the importance of each criterion
- **Impacts:** Direction indicator for each criterion:
  - `+` for beneficial criteria (higher is better)
  - `-` for non-beneficial criteria (lower is better)

### Output
- Results are saved to `Output.csv` with the following columns:
  - Original data attributes
  - TOPSIS Score for each alternative
  - Rank based on TOPSIS score

---

## Project Objectives

- Apply fundamental mathematical principles to calculate TOPSIS scores
- Rank data points effectively based on multiple criteria
- Explore how different weights and impacts influence the final scores
- Generate and store results in a structured output CSV file
- Provide an intuitive interface for decision-making analysis

---

## Results

### Input Dataset Example

The input data typically contains multiple alternatives (rows) with various criteria (columns):

![Input Dataset](https://github.com/user-attachments/assets/0c7ddf53-14ec-4c67-a329-9e9619f47a6b)

### Output Results Example

The output includes the original data along with calculated TOPSIS scores and rankings:

![Output Results](https://github.com/user-attachments/assets/47f471f2-fc19-4e79-8801-e7b1c75ba6b0)

---

## Web Application

A user-friendly web interface is available for performing TOPSIS analysis without command-line interaction:

![Web Application Interface](https://github.com/user-attachments/assets/d3f75981-5479-4805-8c6f-5ee9f86e11ec)

The web application allows you to:
- Upload CSV files directly
- Input weights and impacts through an interactive form
- View results in real-time with visual representations
- Download the output file easily

---

## Features

- **Multi-Criteria Analysis:** Handle datasets with multiple decision criteria
- **Flexible Weighting:** Assign custom weights to prioritize different criteria
- **Flexible Impact Direction:** Specify whether each criterion should be maximized or minimized
- **Scalable:** Process datasets with any number of alternatives and criteria
- **User-Friendly:** Both command-line and web-based interfaces
- **Robust:** Handles normalization and numerical stability effectively

---

## How to Use

### Using Command Line
1. Prepare your data in CSV format with numerical values
2. Define weights for each criterion (comma-separated)
3. Specify impacts for each criterion (+/-)
4. Run the command with appropriate file paths
5. Check the output CSV for results and rankings

### Using Web Application
1. Open the web application in your browser
2. Upload your CSV file
3. Enter weights for each criterion
4. Select impact direction for each criterion
5. Click "Calculate TOPSIS"
6. View and download the results

---

## Example Workflow

**Input:** `sample.csv` with 4 criteria and 10 alternatives
**Command:**
```bash
topsis sample.csv "1,1,1,1" "+,+,-,+" result.csv
```

**Output:** `result.csv` containing original data plus TOPSIS scores and rankings

---

## License

This project is part of the UCS654 course assignment and is made available for educational purposes.

---

## Contact

For questions or issues related to this implementation, please contact the author through the repository.
