/**
 * Class to create a Programmer
 * @example
 * const programmerOne = new Programmer({fullname: 'Rayn Ray'}, 'javascript')
 * programmerOne.getInfo();
 * 
 * @see https://everfuture.go.akamai-access.com/everFuture/study/0/276/1275
 * 
 * @todo implement the rest of methods
 * @tutotial firs-tutorial
 */
class Programmer {

    /**
     * @param {{fullname: string}} user User's Information
     * @param {string} language A programming language
     */
    constructor(user, language) {
        this.fullname = user.fullname;
        this.language = language;
    }

    /**
     * Get Programmer Information
     * @returns {void}
     */
    getInfo() {
        console.log(`I'm ${this.fullname} and my favorite programming language is ${this.language}`)
    }
}

/**
 * Know more in {@link Programmer}
 */
const programmerOne = new Programmer({fullname: 'Rayn Ray'}, 'javascript')
const programmerTwo = new Programmer({fullname: 'Joe'}, 'go')

programmerOne.getInfo();
programmerTwo.getInfo();