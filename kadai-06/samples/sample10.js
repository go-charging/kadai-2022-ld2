const main = () => {lib1()}
const lib1 = () => {lib2()}
const lib2 = () => {lib3()}
const lib3 = () => {lib4()}
const lib4 = () => {lib5()}
const lib5 = () => { throw new Error("エラー")}
main()