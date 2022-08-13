/**
 * Permet de vérifier si une chaine de caractère est incluse dans une autre
 * - Rend les chaines de caractères en minuscules
 * - Enlève les accents
 * @param stringA La chaîne de caractère à vérifier dans
 * @param stringB La chaîne de caractère à vérifier
 * @returns si stringB est incluse dans stringA
 */
function stringIncludes(stringA: string, stringB: string): boolean {
  return stringA
    .toLowerCase()
    .normalize('NFD') // Split la lettre de l'accent (i.e: ê -> e^)
    .replace(/\p{Diacritic}/gu, '') // retire les accents
    .includes(
      stringB
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, ''),
    )
}

export { stringIncludes }
