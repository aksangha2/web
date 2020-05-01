$(function(){
    
    let inp_name=$('#name')
    let inp_age=$('#age')
    let city=$('#city')

    let btn_sub=$('#submit')
    let tbl_persons=$('#persons')

    function refreshPersonsTable(persons){
        tbl_persons.empty()
        tbl_persons.append(
            ` <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
        </tr>
            `
        )
        for (person of persons){
            tbl_persons.append(
                `<tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
            </tr>
                `
            )
        }
    }

    $.get('/api/persons',function(data){
        refreshPersonsTable(data)
    })


    
    btn_sub.click(function(){
        $.post('/api/persons',
        {
            name:inp_name.val(),
            age:inp_age.val(),
            city:city.val()
        },
        function(data){
            refreshPersonsTable(data)
        })
    })
})