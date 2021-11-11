class Solution {
    solve(nums) {
        let numbers = {}
        for (let number of nums){
            if (numbers[number]){
                numbers[number] += 1;
            } else {
                numbers[number] = 1
            }
        }
        let ocurrences = Object.values(numbers)
        let ocurrencesSet = [...new Set(ocurrences)]
        return ocurrences.length === ocurrencesSet.length
    }
}
