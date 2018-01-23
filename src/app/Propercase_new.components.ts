import{Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    
        name: 'propernewcase'
    
    })

export class updatedNewNameComponent implements PipeTransform{

    transform(value:string){
        if(!value) return null;       
        

        let words = value.split(' ');

        for(var i = 0; i< words.length; i++)
        {
            let word = words[i];

                if(i>0 && this.isPrepositions(word))
                {
                    word= word.toLowerCase();
                }
                else
                {
                    word=this.totitleCase(word);
                }
        }
        return words.join(' ');
    }

    private totitleCase(word:string):string
    {        
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPrepositions(word:string):boolean
    {
        let prepositions = [
            'of', 'the'
        ]        
        return prepositions.includes(word.toLowerCase());
    }
}