const assert = require('assert')

const {addNote,getAllNotes,getNoteById,updateNote, deleteNote} = require('../functions/notes')


describe('Notes - Unitaire', () => {
    describe('Ajoute une note à la liste actuelle', () => {
        it('retourne la note ajoutée', () => {
            let result = addNote('mes devoirs', 'math : exo 2; francais : dictée')
            assert.equal(result.title, 'mes devoirs')
            assert.equal(result.content, 'math : exo 2; francais : dictée')

            result = addNote('prochain rdv', 'le 3 mars à 10h')
            assert.equal(result.title, 'prochain rdv')
            assert.equal(result.content, 'le 3 mars à 10h')
        })
    })

    describe('Retourne la liste de notes', () => {
        it('Doit retourner la liste de note actuelle au moement de l\'appel', () => {
            let result = getAllNotes()
            assert.equal(result[0].title, 'mes devoirs')
            assert.equal(result[0].content, 'math : exo 2; francais : dictée')

            assert.equal(result[1].title, 'prochain rdv')
            assert.equal(result[1].content, 'le 3 mars à 10h')    
        })
    })

    describe('Retourne une note à partir de son id', () => {
        it('Doit retourner la note', () => {
            let result = getNoteById(1)
            assert.equal(result.title, 'mes devoirs')
            assert.equal(result.content, 'math : exo 2; francais : dictée')

            result = getNoteById(2)
            assert.equal(result.title, 'prochain rdv')
            assert.equal(result.content, 'le 3 mars à 10h')   
        })

        it('Doit retourner null', () => {
            let result = getNoteById(3)
            assert.equal(result, null)

            result = getNoteById(10)
            assert.equal(result, null)
        })
    })

    describe('Supprime une note à partir de son id', () => {
        it('Doit retourner la note supprimée', () => {
            let result = deleteNote(1)
            assert.equal(result.title, 'mes devoirs')
            assert.equal(result.content, 'math : exo 2; francais : dictée') 

            result = deleteNote(2)
            assert.equal(result.title, 'prochain rdv')
            assert.equal(result.content, 'le 3 mars à 10h')   
        })

        it('Doit retourner null', () => {
            let result = getNoteById(1)
            assert.equal(result, null)

            result = getNoteById(2)
            assert.equal(result, null)
        })
    })
})

describe('Notes - Intégration', () => {
    describe('Modifie une note ajoutée et retourne la note modifiée', () => {
        it('Doit retourner la liste de note finale', () => {
            addNote('mes devoirs', 'math : exo 2; francais : dictée')
            let result = updateNote(3, 'prochain rdv', 'le 3 mars à 10h')

            assert.equal(result.title, 'prochain rdv')
            assert.equal(result.content, 'le 3 mars à 10h')    
        })
    })
})