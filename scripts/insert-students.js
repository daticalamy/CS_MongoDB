db.students.insertMany(
    [
        { name: "Alice Wonderland", year: 2018, major: "History", address: { city: "NYC", street: "123 33rd St.", state:"New York"}},
        { name: "White Rabbit", year: 2017, major: "English", address: { city: "Rabbit Hole", street: "999 Main Street", state:"New York"}},
        { name: "Mad Hatter", year: 2024, major: "Math", address: { city: "Hattery", street: "5th Ave.", state:"New York"}},
        { name: "Dutches", year: 2034, major: "English", address: { city: "The Manor", street: "123 Sycamore St.", state:"New York"}}
    ]
)