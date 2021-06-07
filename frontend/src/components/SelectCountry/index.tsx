import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";
import { useDestination } from "hooks/useDestination";

const Container = styled.div``;

const Label = styled.p`
  color: white;
  margin-bottom: 5px;
`;

const SelectSC = styled(Select)<{ country: string }>`
  height: 50px;
  width: 300px;
  outline: "none";
  cursor: "pointer";
  text-align: "left";
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 1px solid ${grey[300]};
  background-color: white;
  border-radius: 0.25rem;
`;

export default function SelectCountry() {
  const useStyles = makeStyles((theme) => ({
    selectdisabled: {
      color: grey[500],
    },
    menuitem: {
      direction: "rtl",
    },
    menuitemhidden: {
      display: "none",
    },
  }));
  const classes = useStyles();

  const { countries, country, handleChangeCountry } = useDestination();
  const [showPlaceholder, setShowPlaceholder] = useState(country === "none");

  return (
    <Container>
      <Label>País</Label>
      <FormControl>
        <SelectSC
          country={country}
          value={country}
          onChange={handleChangeCountry}
          input={<InputBase />}
          defaultValue="none"
          onFocus={() => setShowPlaceholder(false)}
          onClose={(e: any) => setShowPlaceholder(e.target.value === undefined)}
          className={clsx(
            ".root",
            country === "none" ? classes.selectdisabled : null
          )}
        >
          <MenuItem
            className={clsx(
              classes.menuitem,
              !showPlaceholder ? classes.menuitemhidden : null
            )}
            key="0"
            disabled
            value="none"
          >
            Selecione...
          </MenuItem>
          {countries.map((elem, index: number) => (
            <MenuItem key={index} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </SelectSC>
      </FormControl>
    </Container>
  );
}
