const express = require("express");
const moongose = require("mongoose");
const Kids = require("../models/kids");

async function createAllKids(req, res) {
  try {
    const kids = await Kids.create(req.body);

    res.status(200).json({
      success: true,
      message: "Kids fetched Boys and Girls successfully",
        data: kids,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching kids",
      error: error.message,
    });
  }
}

async function getAllKids(req, res) {
  try {
    const kidsMobile = await Kids.find({ device: "Mobile" });
    const kidsDesktop = await Kids.find({ device: "Desktop" });
    res.status(200).json({
      success: true,
      message: "Kids fetched Boys and Girls successfully",
      data: { kidsMobile, kidsDesktop },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching kids",
      error: error.message,
    });
  }
}

module.exports = {
  createAllKids,
    getAllKids,
};
