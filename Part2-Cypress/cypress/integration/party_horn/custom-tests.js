describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el)=> {
      expect($el).to.have.value(75);
    })
  })
  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    })
  })
  it('Volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume',.33);
    })
  })
  //Test if the image and sound sources change when you select the party horn radio button
  it('Checks if the image and sound sources change when party horn selected', () => {
    cy.get('#radio-party-horn').check();
    //Sound Image Change
    cy.get('#sound-image').invoke('attr', 'src').then(($el) => {
      expect($el).to.equal("./assets/media/images/party-horn.svg" );
    })
    cy.get('#horn-sound').invoke('attr', 'src').then(($el) => {
      expect($el).to.equal("./assets/media/audio/party-horn.mp3");
    })
  })
  //Test if the volume image changes when increasing volumes (you must test for all 4 cases)
  it('Test if the volume image changes when 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').invoke('attr', 'src').then(($el) => {
      expect($el).to.have.equal("./assets/media/icons/volume-level-0.svg");
    })
  })
  it('Test if the volume image changes when 33', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').invoke('attr', 'src').then(($el) => {
      expect($el).to.have.equal("./assets/media/icons/volume-level-1.svg");
    })
  })
  it('Test if the volume image changes when 50', () => {
    cy.get('#volume-slider').invoke('val', 50).trigger('input');
    cy.get('#volume-image').invoke('attr', 'src').then(($el) => {
      expect($el).to.have.equal("./assets/media/icons/volume-level-2.svg");
    })
  })
  it('Test if the volume image changes when 90', () => {
    cy.get('#volume-slider').invoke('val', 90).trigger('input');
    cy.get('#volume-image').invoke('attr', 'src').then(($el) => {
      expect($el).to.have.equal("./assets/media/icons/volume-level-3.svg");
    })
  })
  //Test if the honk button is disabled when the textbox input is a empty or a non-number
  it('Textbox is empty', () => {
    cy.get('#volume-number').clear().then(() => {
      cy.get("#honk-btn").should("have.attr", "disabled", "disabled");

    });
  });
  it('Textbox is non-number', () => {
    cy.get('#volume-number').clear().invoke('attr','value', 'e').then(() => {
      cy.get("#honk-btn").should("have.attr", "disabled", "disabled");
    });
  });
  //Test if an error is shown when you type a number outside of the given range for the volume textbox input
  it('test for error with number outside of range', () => {
    cy.get('#volume-number').invoke('val', 140).then(() => {
      cy.get('input:valid').should('exist');

  });
});


});
