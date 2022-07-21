const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  res.render('tickets/new', { title: 'Add New Ticket', flightId: req.params.id })
};

function create(req, res) {
  const flightId = req.params.id;
  const ticket = new Ticket(req.body);
  ticket.flight = flightId;
  ticket.save(function(err) {
      if (err) return res.redirect(`/flights/${flightId}/tickets/new`);
      res.redirect(`/flights/${flightId}`)
  });
};