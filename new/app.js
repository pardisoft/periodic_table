new Vue({  
    el:'#app',
    methods: {
        getElement(x, y) {
            const result = this.elements.find((element) => {
                return element.row == y && element.col == x;
            });
            return result;
        },
        getElementSymbol(x, y) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                return element.symbol;
            }
        },
        getElementName(x, y) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                return element.name;
            }
        },
        getElementColor(x, y) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                return element.color;
            }
        },
        getElementTypeId(x, y) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                return element.type;
            }
        },
        openElementPopup(x, y) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                alert("My name is: " + element.name);
            }
        },
        getType(id) {
            const type = this.types.find((type) => {
                return type.id == id;
            });
            return type;
        },
        getElementTypeColor(x,y ) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                const typeId = this.getElementTypeId(x, y);
                const type = this.getType(typeId);
                if (type !== undefined) {
                    return type.color;
                }
            }
        },
        getElementTypeName(x, y) {
            const element = this.getElement(x,y);
            if (element !== undefined) {
                const typeId = this.getElementTypeId(x, y);
                const type = this.getType(typeId);
                if (type !== undefined) {
                    return type.name;
                }
            }
        },
    },
    data:{  
        elements : [
            {
                symbol:"H",
                name:"Hydrogen",
                row:1,
                col:1,
                type: 1,
            },
            {
                symbol:"He",
                name:"Helium",
                row:1,
                col:18,
                type: 2,
            },
            {
                symbol:"Li",
                name:"Lithium",
                row:2,
                col:1,
                type: 4,
            },
            {
                symbol:"Be",
                name:"Beryllium",
                row:2,
                col:2,
                type: 5,
            },
            {
                symbol:"B",
                name:"Boron",
                row:2,
                col:13,
                type: 3,
            },
            {
                symbol:"C",
                name:"Carbon",
                row:2,
                col:14,
                type: 1,
            },
            {
                symbol:"N",
                name:"Nitrogen",
                row:2,
                col:15,
                type: 1,
            },
            {
                symbol:"O",
                name:"Oxygen",
                row:2,
                col:16,
                type: 1,
            },
            {
                symbol:"F",
                name:"Fluorine",
                row:2,
                col:17,
                type: 1,
            },
            {
                symbol:"Ne",
                name:"Neon",
                row:2,
                col:18,
                type: 2,
            },
            {
                symbol:"Na",
                name:"Sodium",
                row:3,
                col:1,
                type: 4,
            },
            {
                symbol:"Mg",
                name:"Magnesium",
                row:3,
                col:2,
                type: 5,
            },
            {
                symbol:"Al",
                name:"Aluminium",
                row:3,
                col:13,
                type: 9,
            },
            {
                symbol:"Si",
                name:"Silicon",
                row:3,
                col:14,
                type: 3,
            },
            {
                symbol:"P",
                name:"Phosphorus",
                row:3,
                col:15,
                type: 1,
            },
            {
                symbol:"S",
                name:"Sulfor",
                row:3,
                col:16,
                type: 1,
            },
            {
                symbol:"Cl",
                name:"Chlorine",
                row:3,
                col:17,
                type: 1,
            },
            {
                symbol:"Ar",
                name:"Argon",
                row:3,
                col:18,
                type: 2,
            },
            // {
            //     symbol:"Og",
            //     name:"Oganesson",
            //     row:7,
            //     col:18,
            //     type: 10,
            // },
            // {
            //     symbol:"Os",
            //     name:"Osmium",
            //     row:6,
            //     col:8,
            //     type: 8,
            // },
        ],
        types: [
            {
                id: 1,
                name: 'other nonmetal',
                color: '#4fff4f',
            },
            {
                id: 2,
                name: 'Noble gases',
                color: '#8cd4ff'
            },
            {
                id: 3,
                name: 'Metalloids',
                color: '#77DD88'
            },
            {
                id: 4,
                name: 'Alkali metals',
                color: '#FFCC33'
            },
            {
                id: 5,
                name: 'Alkaline earth metals',
                color: '#FFFF44'
            },
            {
                id: 6,
                name: 'Lanthanoids',
                color: '#FFBB99'
            },
            {
                id: 7,
                name: 'Actinoids',
                color: '#EEBBDD'
            },
            {
                id: 8,
                name: 'Transition metals',
                color: '#DDBBBB'
            },
            {
                id: 9,
                name: 'Post-transition metals',
                color: '#99DDCC'
            },
            {
                id: 10,
                name: 'Unkown',
                color: '#DDDDDD'
            },
        ]
    },
});
