# Instagram Following Checker

This program helps you identify Instagram accounts that you follow but do not follow you back. It achieves this by comparing two HTML files obtained by downloading your Instagram account information.

---

## **How It Works**

1. **Input HTML Files**:
   - The program takes two HTML files as input: (this are the name of the files instagram gives you directly)
     - `followers_1.html`: Contains the list of accounts following you. 
     - `following.html`: Contains the list of accounts you follow.

2. **Parse HTML Content**:
   - The program uses the `JSDOM` library to parse the HTML files and extract the relevant account names.

3. **Compare Lists**:
   - It compares the two lists of account names to find accounts that you follow but are not following you back.

4. **Output the Results**:
   - The results are printed to the console in a readable format.

---

## **Installation and Setup**

### **Prerequisites**
1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Download your Instagram account information:
   - Go to your Instagram settings > Privacy and Security > Download Data.
   - Request your data, and once the files are ready, download and extract the ZIP file.
   - Locate the `followers_1.html` and `following.html` files from the `followers_and_following` folder.

### **Steps to Set Up**

1. Clone or download this repository to your local machine.
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Place the `followers_1.html` and `following.html` files in the root directory of the project.

---

## **Usage**

1. Run the program:
   ```bash
   node index.js
   ```

2. View the output in the console. The program will display a list of accounts that you follow but do not follow you back:
   ```
   Not following back: 
   [
     "username1",
     "username2",
     "username3"
   ]
   ```

---

## **Code Explanation**

### **Key Components**
1. **`ExtractFollowersFromFile` Function**:
   - Reads an HTML file and uses the `JSDOM` library to extract account names from `<a>` tags.

2. **`compareList` Function**:
   - Compares the two lists of account names and identifies accounts that are in `following` but not in `followers`.

3. **`mainModule` Function**:
   - Orchestrates the workflow by:
     - Reading the input files.
     - Extracting account names.
     - Comparing the lists.
     - Printing the results.

---

## **Dependencies**

- `fs`: Built-in Node.js module for file operations.
- `jsdom`: Library for parsing HTML in a Node.js environment.

Install these dependencies using:
```bash
npm install jsdom
```

---

## **File Structure**
```
|-- index.js             # Main program file
|-- followers_1.html     # Input file for followers
|-- following.html       # Input file for following
|-- package.json         # Node.js project configuration
|-- package-lock.json    # Dependency lock file
```

---

## **Troubleshooting**

1. **Error: Cannot find module `jsdom`**:
   - Ensure you have installed the `jsdom` dependency by running:
     ```bash
     npm install jsdom
     ```

2. **File Not Found Errors**:
   - Verify that `followers_1.html` and `following.html` are in the same directory as the `index.js` file.

3. **Empty Output**:
   - Ensure the input HTML files contain valid account information extracted from Instagram.

---
