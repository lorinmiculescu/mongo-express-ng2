/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 * GET     /api/things/:id          ->  show
 * PUT     /api/things/:id          ->  upsert
 * PATCH   /api/things/:id          ->  patch
 * DELETE  /api/things/:id          ->  destroy
 */

'use strict';

import Thing from './thing.model';

// Gets a list of Things
export function index(req, res) {
  
}

// Gets a single Thing from the DB
export function show(req, res) {
  
}

// Creates a new Thing in the DB
export function create(req, res) {
  
}

// Upserts the given Thing in the DB at the specified ID
export function upsert(req, res) {
  
}

// Updates an existing Thing in the DB
export function patch(req, res) {
  
}

// Deletes a Thing from the DB
export function destroy(req, res) {
  
}