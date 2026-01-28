//for loop keeps running when the statement is true
for(let rep = 1; rep <=30; rep++){
    console.log(`Class time is now ${rep}`)
}

const types = [];
const anasArray = [
    'Anas',
    'Mirabel',
    '2031',
    'teacher'
    
]

for(let i = 0; i < anasArray.length; i++){
    console.log(anasArray[i], typeof anasArray[i])

    // types[i] = typeof anasArray[i];
    types.push(types)
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages)

































// // Calculate total cost with tax
// const cart = [
//     { name: "Laptop", price: 999.99, quantity: 1 },
//     { name: "Mouse", price: 29.99, quantity: 2 },
//     { name: "Keyboard", price: 79.99, quantity: 1 }
// ];

// let subtotal = 0;
// for (let i = 0; i < cart.length; i++) {
//     subtotal += cart[i].price * cart[i].quantity;
// }

// const tax = subtotal * 0.08;
// const total = subtotal + tax;
// console.log(`Subtotal: $${subtotal.toFixed(2)}`);
// console.log(`Total with tax: $${total.toFixed(2)}`);




// // Validate multiple form fields
// const formData = {
//     email: "user@example.com",
//     password: "Pass123!",
//     age: "25",
//     username: "john_doe"
// };

// const errors = [];
// for (let field in formData) {
//     if (formData[field].trim() === "") {
//         errors.push(`${field} is required`);
//     }
    
//     if (field === "email" && !formData[field].includes("@")) {
//         errors.push("Invalid email format");
//     }
    
//     if (field === "password" && formData[field].length < 8) {
//         errors.push("Password must be at least 8 characters");
//     }
// }

// console.log(errors.length === 0 ? "Form is valid!" : errors);



// // Add click handlers to multiple buttons
// const buttons = document.querySelectorAll('.action-button');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function(e) {
//         console.log(`Button ${i + 1} clicked`);
//         e.target.style.backgroundColor = '#4CAF50';
//     });


//     // Generate table rows from data
// const employees = [
//     { id: 1, name: "Sarah Connor", department: "Engineering" },
//     { id: 2, name: "John Smith", department: "Marketing" },
//     { id: 3, name: "Emma Wilson", department: "Sales" }
// ];

// let tableHTML = '<table><tr><th>ID</th><th>Name</th><th>Department</th></tr>';

// for (let i = 0; i < employees.length; i++) {
//     tableHTML += `<tr>
//         <td>${employees[i].id}</td>
//         <td>${employees[i].name}</td>
//         <td>${employees[i].department}</td>
//     </tr>`;
// }

// tableHTML += '</table>';
// console.log(tableHTML);
// }



// // Filter and transform API data
// const apiResponse = [
//     { userId: 1, status: "active", lastLogin: "2024-01-10" },
//     { userId: 2, status: "inactive", lastLogin: "2023-11-15" },
//     { userId: 3, status: "active", lastLogin: "2024-01-14" },
//     { userId: 4, status: "active", lastLogin: "2024-01-12" }
// ];

// const activeUsers = [];
// for (let i = 0; i < apiResponse.length; i++) {
//     if (apiResponse[i].status === "active") {
//         activeUsers.push({
//             id: apiResponse[i].userId,
//             lastSeen: apiResponse[i].lastLogin
//         });
//     }
// }

// console.log(`Active users: ${activeUsers.length}`);
// console.log(activeUsers);



// // Countdown timer with for loop
// function startCountdown(seconds) {
//     let count = seconds;
    
//     const interval = setInterval(() => {
//         console.log(`Time remaining: ${count} seconds`);
//         count--;
        
//         if (count < 0) {
//             clearInterval(interval);
//             console.log("Countdown complete!");
//         }
//     }, 1000);
// }

// // Alternative: Generate time slots for scheduling
// const timeSlots = [];
// for (let hour = 9; hour <= 17; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//         const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         timeSlots.push(time);
//     }
// }

// console.log("Available appointment times:", timeSlots);
// // Output: ["09:00", "09:30", "10:00", "10:30", ...]





// // Search products by keyword and price range
// const products = [
//     { id: 1, name: "Wireless Headphones", category: "Electronics", price: 89.99 },
//     { id: 2, name: "Running Shoes", category: "Sports", price: 120.00 },
//     { id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 45.50 },
//     { id: 4, name: "Yoga Mat", category: "Sports", price: 29.99 }
// ];

// const searchTerm = "bluetooth";
// const maxPrice = 100;
// const results = [];

// for (let i = 0; i < products.length; i++) {
//     const nameMatch = products[i].name.toLowerCase().includes(searchTerm.toLowerCase());
//     const priceMatch = products[i].price <= maxPrice;
    
//     if (nameMatch && priceMatch) {
//         results.push(products[i]);
//     }
// }

// console.log(`Found ${results.length} matching products:`, results);



// // Simulate batch processing images with progress tracking
// const images = [
//     { name: "photo1.jpg", size: 2500 },
//     { name: "photo2.jpg", size: 3200 },
//     { name: "photo3.jpg", size: 1800 },
//     { name: "photo4.jpg", size: 4100 },
//     { name: "photo5.jpg", size: 2900 }
// ];

// const targetSize = 1920;
// const processedImages = [];

// console.log("Starting batch resize...\n");

// for (let i = 0; i < images.length; i++) {
//     const image = images[i];
//     const percentage = ((i + 1) / images.length * 100).toFixed(0);
    
//     // Simulate processing
//     if (image.size > targetSize) {
//         processedImages.push({
//             name: image.name,
//             originalSize: image.size,
//             newSize: targetSize,
//             reduced: image.size - targetSize
//         });
//         console.log(`[${percentage}%] Resized ${image.name}: ${image.size}px → ${targetSize}px`);
//     } else {
//         console.log(`[${percentage}%] Skipped ${image.name}: already optimized`);
//     }
// }

// console.log(`\nProcessed ${processedImages.length} of ${images.length} images`);


// // Remove duplicates from array
// const emailList = [
//     "user1@example.com",
//     "user2@example.com",
//     "user1@example.com",
//     "user3@example.com",
//     "user2@example.com",
//     "user4@example.com"
// ];

// const uniqueEmails = [];
// const seen = {};

// for (let i = 0; i < emailList.length; i++) {
//     if (!seen[emailList[i]]) {
//         uniqueEmails.push(emailList[i]);
//         seen[emailList[i]] = true;
//     }
// }

// console.log(`Original count: ${emailList.length}`);
// console.log(`Unique count: ${uniqueEmails.length}`);
// console.log('Unique emails:', uniqueEmails);


// // Calculate sum of all elements in 2D array (matrix)
// const salesData = [
//     [1200, 1500, 1800, 2000], // Q1 monthly sales
//     [2200, 1900, 2100, 2400], // Q2 monthly sales
//     [2600, 2800, 3000, 2900], // Q3 monthly sales
//     [3200, 3400, 3100, 3500]  // Q4 monthly sales
// ];

// let totalSales = 0;
// const quarterlySales = [];

// for (let i = 0; i < salesData.length; i++) {
//     let quarterTotal = 0;
    
//     for (let j = 0; j < salesData[i].length; j++) {
//         quarterTotal += salesData[i][j];
//         totalSales += salesData[i][j];
//     }
    
//     quarterlySales.push(quarterTotal);
//     console.log(`Q${i + 1} Total: $${quarterTotal}`);
// }

// console.log(`Annual Total: $${totalSales}`);



// // Analyze password strength
// function checkPasswordStrength(password) {
//     let score = 0;
//     const criteria = {
//         length: false,
//         uppercase: false,
//         lowercase: false,
//         numbers: false,
//         special: false
//     };
    
//     // Check length
//     if (password.length >= 8) {
//         criteria.length = true;
//         score += 20;
//     }
    
//     // Check character types
//     for (let i = 0; i < password.length; i++) {
//         const char = password[i];
        
//         if (char >= 'A' && char <= 'Z') criteria.uppercase = true;
//         if (char >= 'a' && char <= 'z') criteria.lowercase = true;
//         if (char >= '0' && char <= '9') criteria.numbers = true;
//         if ('!@#$%^&*()_+-=[]{}|;:,.<>?'.includes(char)) criteria.special = true;
//     }
    
//     if (criteria.uppercase) score += 20;
//     if (criteria.lowercase) score += 20;
//     if (criteria.numbers) score += 20;
//     if (criteria.special) score += 20;
    
//     const strength = score < 40 ? 'Weak' : score < 70 ? 'Medium' : 'Strong';
//     return { score, strength, criteria };
// }

// console.log(checkPasswordStrength("MyP@ss123"));



// // Parse CSV string into structured data
// const csvData = `Name,Email,Age,City
// John Doe,john@email.com,28,New York
// Jane Smith,jane@email.com,34,Los Angeles
// Bob Johnson,bob@email.com,45,Chicago`;

// const lines = csvData.split('\n');
// const headers = lines[0].split(',');
// const users = [];

// for (let i = 1; i < lines.length; i++) {
//     const values = lines[i].split(',');
//     const user = {};
    
//     for (let j = 0; j < headers.length; j++) {
//         user[headers[j]] = values[j];
//     }
    
//     users.push(user);
// }

// console.log('Parsed users:', users);


// const fruits = ['apple', 'banana', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }




// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// console.log(sum); // 15



// for (let i = 1; i <= 5; i++) {
//   console.log('*'.repeat(i));
// }


// const word = 'JavaScript';

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }


// const numbers = [2, 5, 8, 11, 14];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }




// // Create a complete multiplication table (1-12)
// function generateMultiplicationGrid(size = 12) {
//     const grid = [];
    
//     for (let row = 1; row <= size; row++) {
//         const rowData = [];
//         for (let col = 1; col <= size; col++) {
//             rowData.push({
//                 expression: `${row} × ${col}`,
//                 result: row * col
//             });
//         }
//         grid.push(rowData);
//     }
    
//     // Display formatted table
//     console.log("Multiplication Table:");
//     for (let i = 0; i < grid.length; i++) {
//         let rowStr = `${i + 1}: `;
//         for (let j = 0; j < grid[i].length; j++) {
//             rowStr += `${grid[i][j].result}`.padStart(4, ' ');
//         }
//         console.log(rowStr);
//     }
    
//     return grid;
// }

// generateMultiplicationGrid(10);



// // Breadth-First Search to find shortest path in a graph
// function findShortestPath(graph, start, end) {
//     const queue = [[start]];
//     const visited = new Set([start]);
    
//     while (queue.length > 0) {
//         const path = queue.shift();
//         const node = path[path.length - 1];
        
//         if (node === end) {
//             return path;
//         }
        
//         // Explore neighbors
//         for (let i = 0; i < graph[node].length; i++) {
//             const neighbor = graph[node][i];
            
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 const newPath = [...path, neighbor];
//                 queue.push(newPath);
//             }
//         }
//     }
    
//     return null; // No path found
// }

// // Example: Social network connections
// const socialNetwork = {
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Emma'],
//     'Charlie': ['Alice', 'Emma'],
//     'David': ['Bob', 'Frank'],
//     'Emma': ['Bob', 'Charlie', 'Frank'],
//     'Frank': ['David', 'Emma']
// };

// const path = findShortestPath(socialNetwork, 'Alice', 'Frank');
// console.log(`Shortest path: ${path.join(' → ')}`);
// // Output: Alice → Bob → David → Frank



// Calculate Fibonacci sequence with memoization
function fibonacciSequence(n) {
    const memo = { 0: 0, 1: 1 };
    const sequence = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        // Check memo first
        if (memo[i] !== undefined) {
            sequence.push(memo[i]);
            continue;
        }
        
        // Calculate and store
        memo[i] = memo[i - 1] + memo[i - 2];
        sequence.push(memo[i]);
    }
    
    return {
        sequence: sequence,
        nthValue: memo[n],
        memo: memo
    };
}

// // Advanced: Find Fibonacci numbers under a limit
// function fibonacciUnderLimit(limit) {
//     const result = [];
//     let a = 0, b = 1;
    
//     for (let current = a; current < limit; ) {
//         result.push(current);
//         const next = a + b;
//         a = b;
//         b = next;
//         current = a;
//     }
    
//     return result;
// }

// console.log(fibonacciSequence(10));
// console.log("Fibonacci under 1000:", fibonacciUnderLimit(1000));





// // Generate all permutations of an array
// function generatePermutations(arr) {
//     const results = [];
    
//     function permute(current, remaining) {
//         if (remaining.length === 0) {
//             results.push([...current]);
//             return;
//         }
        
//         for (let i = 0; i < remaining.length; i++) {
//             const newCurrent = [...current, remaining[i]];
//             const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
//             permute(newCurrent, newRemaining);
//         }
//     }
    
//     permute([], arr);
//     return results;
// }

// // Iterative approach for better performance
// function permuteIterative(arr) {
//     const result = [arr.slice()];
//     const c = new Array(arr.length).fill(0);
//     let i = 1;
    
//     while (i < arr.length) {
//         if (c[i] < i) {
//             const swapIdx = i % 2 === 0 ? 0 : c[i];
//             [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
//             result.push(arr.slice());
//             c[i]++;
//             i = 1;
//         } else {
//             c[i] = 0;
//             i++;
//         }
//     }
    
//     return result;
// }

// // Practical use: Find best arrangement
// const tasks = ['A', 'B', 'C'];
// const allArrangements = generatePermutations(tasks);
// console.log(`Total arrangements: ${allArrangements.length}`);
// console.log('All permutations:', allArrangements);

// // Example: Traveling salesman (simplified)
// function findOptimalRoute(cities, distances) {
//     const routes = generatePermutations(cities);
//     let minDistance = Infinity;
//     let bestRoute = null;
    
//     for (let i = 0; i < routes.length; i++) {
//         const route = routes[i];
//         let totalDistance = 0;
        
//         for (let j = 0; j < route.length - 1; j++) {
//             const from = route[j];
//             const to = route[j + 1];
//             totalDistance += distances[from][to];
//         }
        
//         if (totalDistance < minDistance) {
//             minDistance = totalDistance;
//             bestRoute = route;
//         }
//     }
    
//     return { route: bestRoute, distance: minDistance };
// }

// const cityDistances = {
//     'A': { 'B': 10, 'C': 15, 'D': 20 },
//     'B': { 'A': 10, 'C': 35, 'D': 25 },
//     'C': { 'A': 15, 'B': 35, 'D': 30 },
//     'D': { 'A': 20, 'B': 25, 'C': 30 }
// };

// const optimal = findOptimalRoute(['A', 'B', 'C', 'D'], cityDistances);
// console.log('Optimal route:', optimal);





// // Advanced text search with fuzzy matching and context extraction
// function advancedTextSearch(text, searchTerms, options = {}) {
//     const {
//         caseSensitive = false,
//         fuzzyMatch = true,
//         contextLength = 50,
//         highlightResults = true,
//         maxResults = 10
//     } = options;
    
//     const results = [];
//     const processedText = caseSensitive ? text : text.toLowerCase();
    
//     // Process each search term
//     for (let termIdx = 0; termIdx < searchTerms.length; termIdx++) {
//         const term = caseSensitive ? searchTerms[termIdx] : searchTerms[termIdx].toLowerCase();
//         const matches = [];
        
//         // Find all occurrences
//         for (let i = 0; i < processedText.length; i++) {
//             let matchFound = false;
//             let matchLength = 0;
            
//             // Exact match
//             if (processedText.substring(i, i + term.length) === term) {
//                 matchFound = true;
//                 matchLength = term.length;
//             }
//             // Fuzzy match (allow 1 character difference)
//             else if (fuzzyMatch && term.length > 3) {
//                 let differences = 0;
//                 let possibleMatch = true;
                
//                 for (let j = 0; j < term.length && i + j < processedText.length; j++) {
//                     if (processedText[i + j] !== term[j]) {
//                         differences++;
//                         if (differences > 1) {
//                             possibleMatch = false;
//                             break;
//                         }
//                     }
//                 }
                
//                 if (possibleMatch && differences <= 1) {
//                     matchFound = true;
//                     matchLength = term.length;
//                 }
//             }
            
//             if (matchFound) {
//                 // Extract context
//                 const start = Math.max(0, i - contextLength);
//                 const end = Math.min(text.length, i + matchLength + contextLength);
                
//                 const beforeContext = text.substring(start, i);
//                 const matchText = text.substring(i, i + matchLength);
//                 const afterContext = text.substring(i + matchLength, end);
                
//                 matches.push({
//                     position: i,
//                     matchText: matchText,
//                     context: {
//                         before: beforeContext,
//                         match: matchText,
//                         after: afterContext,
//                         full: highlightResults 
//                             ? `...${beforeContext}**${matchText}**${afterContext}...`
//                             : `...${beforeContext}${matchText}${afterContext}...`
//                     }
//                 });
                
//                 // Skip past this match
//                 i += matchLength - 1;
                
//                 if (matches.length >= maxResults) break;
//             }
//         }
        
//         if (matches.length > 0) {
//             results.push({
//                 term: searchTerms[termIdx],
//                 matchCount: matches.length,
//                 matches: matches
//             });
//         }
//     }
    
//     return results;
// }

// // Advanced use case: Building a search index
// function buildSearchIndex(documents) {
//     const index = {};
    
//     for (let docIdx = 0; docIdx < documents.length; docIdx++) {
//         const doc = documents[docIdx];
//         const words = doc.content.toLowerCase().split(/\W+/);
        
//         for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
//             const word = words[wordIdx];
            
//             if (word.length < 3) continue; // Skip short words
            
//             if (!index[word]) {
//                 index[word] = {
//                     word: word,
//                     documents: [],
//                     totalOccurrences: 0
//                 };
//             }
            
//             // Check if this document is already tracked
//             let docEntry = null;
//             for (let i = 0; i < index[word].documents.length; i++) {
//                 if (index[word].documents[i].id === doc.id) {
//                     docEntry = index[word].documents[i];
//                     break;
//                 }
//             }
            
//             if (!docEntry) {
//                 docEntry = {
//                     id: doc.id,
//                     title: doc.title,
//                     positions: [],
//                     frequency: 0
//                 };
//                 index[word].documents.push(docEntry);
//             }
            
//             docEntry.positions.push(wordIdx);
//             docEntry.frequency++;
//             index[word].totalOccurrences++;
//         }
//     }
    
//     return index;
// }

// // Ranked search with TF-IDF scoring
// function rankedSearch(index, query, documents) {
//     const queryTerms = query.toLowerCase().split(/\W+/);
//     const scores = {};
//     const numDocuments = documents.length;
    
//     // Calculate scores for each document
//     for (let termIdx = 0; termIdx < queryTerms.length; termIdx++) {
//         const term = queryTerms[termIdx];
        
//         if (!index[term]) continue;
        
//         const docsWithTerm = index[term].documents.length;
//         const idf = Math.log(numDocuments / docsWithTerm);
        
//         for (let docIdx = 0; docIdx < index[term].documents.length; docIdx++) {
//             const docInfo = index[term].documents[docIdx];
//             const tf = docInfo.frequency;
//             const tfidf = tf * idf;
            
//             if (!scores[docInfo.id]) {
//                 scores[docInfo.id] = {
//                     id: docInfo.id,
//                     title: docInfo.title,
//                     score: 0,
//                     matchedTerms: []
//                 };
//             }
            
//             scores[docInfo.id].score += tfidf;
//             scores[docInfo.id].matchedTerms.push(term);
//         }
//     }
    
//     // Convert to array and sort by score
//     const results = [];
//     for (let docId in scores) {
//         results.push(scores[docId]);
//     }
    
//     // Sort by score descending
//     for (let i = 0; i < results.length; i++) {
//         for (let j = i + 1; j < results.length; j++) {
//             if (results[j].score > results[i].score) {
//                 [results[i], results[j]] = [results[j], results[i]];
//             }
//         }
//     }
    
//     return results;
// }

// // Example usage
// const article = `
// Machine learning is a subset of artificial intelligence that focuses on 
// developing algorithms that can learn from and make predictions based on data. 
// Deep learning, a specialized form of machine learning, uses neural networks 
// with multiple layers to process complex patterns in large datasets.
// `;

// const searchResults = advancedTextSearch(
//     article, 
//     ['learning', 'algoritms', 'neural'], // Note: 'algoritms' is misspelled
//     { 
//         fuzzyMatch: true, 
//         contextLength: 30,
//         highlightResults: true 
//     }
// );

// console.log('Search Results:');
// searchResults.forEach(result => {
//     console.log(`\nTerm: "${result.term}" (${result.matchCount} matches)`);
//     result.matches.forEach((match, idx) => {
//         console.log(`  ${idx + 1}. ${match.context.full}`);
//     });
// });

// // Example: Building and searching an index
// const documents = [
//     {
//         id: 1,
//         title: "Introduction to JavaScript",
//         content: "JavaScript is a versatile programming language used for web development."
//     },
//     {
//         id: 2,
//         title: "Python for Data Science",
//         content: "Python is popular for data science and machine learning applications."
//     },
//     {
//         id: 3,
//         title: "Web Development Basics",
//         content: "Web development involves JavaScript, HTML, CSS, and various frameworks."
//     }
// ];

// const searchIndex = buildSearchIndex(documents);
// console.log('\nSearch Index built with', Object.keys(searchIndex).length, 'unique words');

// const ranked = rankedSearch(searchIndex, "JavaScript web development", documents);
// console.log('\nRanked Search Results:');
// ranked.forEach((result, idx) => {
//     console.log(`${idx + 1}. ${result.title} (Score: ${result.score.toFixed(2)})`);
//     console.log(`   Matched terms: ${result.matchedTerms.join(', ')}`);
// });