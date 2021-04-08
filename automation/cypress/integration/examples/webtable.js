describe('Tutorialspoint Test', function () {
   // test case
   it('Test Case4', function (){
      cy.visit("https://www.tutorialspoint.com/plsql/plsql_dbms_output.htm");
      // identify the second column for all the rows
      cy.get('.table.table-bordered > tbody > tr > td:nth-child(1)').each(($el,
      index, $list) => {
         // grabbing all text from second column
         const txt = $el.text();
         // checking the matching condition
         if (txt.includes('1')){
            // capturing the next sibling with the help of next() method
            cy.get('.table.table-bordered > tbody > tr > td:nth-child(1)')
            .eq(index).next().then(function(desc){
               // capturing the text of next sibling
               const rsl = desc.text();
               //assertion to verify the text
               expect(rsl).to.contains('DBMS_OUTPUT.DISABLE');
            })
         }
      })
   });
});
