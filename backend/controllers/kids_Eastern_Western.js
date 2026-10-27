const express = require('express');
const mongoose = require('mongoose');
const kidsEasternWesternModel = require('../models/kids_Eastern_Western');

// For creating a new entry
async function createAllKidsEasternWestern(req, res) {
    try {
        const kidsData = await kidsEasternWesternModel.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: kidsData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product creation failed',
            error: error.message
        });
    }
}

// For getting all entries (GET function)
async function getAllKidsEasternWestern(req, res) {
    try {
        const kidsData = await kidsEasternWesternModel.find({});
        res.status(200).json({
            success: true,
            message: 'Products found successfully',
            data: kidsData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Products not found',
            error: error.message
        });
    }
}

module.exports = {
    createAllKidsEasternWestern,
    getAllKidsEasternWestern
}