function paging() {
    const movies = db.movies.find();
    const movieCount = db.movies.find().count();

    for (let i = 0; i < movieCount; i += 3) {
        for (let j = 0; j < 3; j += 1) {
            print(`${movies[i + j].title}:${movies[i + j].category} movie`);
        }
        print('--page over--');
    }
}
paging();