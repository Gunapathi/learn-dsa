function findOptimalBuilding(heights) {
    const n = heights.length;
    let maxVisibleBuildings = 0;
    let optimalBuildingIndex = 0;

    // Function to count visible buildings from a given starting point
    function countVisibleBuildings(start) {
        let count = 0;
        let currentHeight = heights[start];

        for (let i = start + 1; i < n; i++) {
            if (heights[i] > currentHeight) {
                count++;
                currentHeight = heights[i]; // update the current height to block shorter buildings
            }
        }

        return count;
    }

    // Iterate over each building and calculate visible buildings
    for (let i = 0; i < n; i++) {
        const visibleBuildings = countVisibleBuildings(i);

        // Update maxVisibleBuildings if a better option is found
        if (visibleBuildings > maxVisibleBuildings) {
            maxVisibleBuildings = visibleBuildings;
            optimalBuildingIndex = i;
        }
    }

    // Return the 1-based index (add 1 to the result)
    return optimalBuildingIndex + 1;
}

// Example usage
// const buildings = [4, 2, 1, 3];
// const buildings = [304, 456, 409, 52, 201, 278];
const buildings = [153, 199, 301, 245];
const result = findOptimalBuilding(buildings);
console.log("Sam should stand on building at position:", result);
