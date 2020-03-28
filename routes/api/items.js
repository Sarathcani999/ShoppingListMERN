const router = require('express').Router()
const auth = require('../middleware/auth')

// Item Model
const Item = require('../../models/Items')

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/' , (req,res) => {
    Item.find()
        .sort({
            date : -1
        })
        .then(items => res.json(items))
        .catch(err => res.json({
            "message" : err.message
        }))
})

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/' , auth , (req,res) => {
    
    const newItem = new Item({
        name : req.body.name
    })

    newItem.save()
        .then(item => res.status(201).json(item))

})

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id' , auth , (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
                             .then(() => res.json({"id" : item._id}))
        ).catch(err => res.status(404).json({ success : false , message : err.message}))
        
})

module.exports = router